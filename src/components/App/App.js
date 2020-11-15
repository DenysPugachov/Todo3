import React, { Component } from 'react';
import Header from '../Header/Header';
import InputTask from '../InputTask/InputTask';
import TodoList from '../TodoList/TodoList';

export default class App extends Component {

  taskId = 1000;

  state = {
    todoArr: [
      this.createTodoItem("Eat"),
      this.createTodoItem("Drink"),
      this.createTodoItem("Work"),
      this.createTodoItem("Sleep"),
    ],
    inputFilterValue: "",
    btnFilterValue: "all",
  };

  createTodoItem(label) {
    return {
      label,
      done: false,
      important: false,
      id: this.taskId++,
    };
  }

  addTask = label => {
    if (!label) { return; }
    this.setState(({ todoArr }) => {
      return {
        todoArr: [...todoArr, this.createTodoItem(label)],
      };
    });
  };

  toggleProp(arr, id, prop) {
    //update Task item
    const taskIndex = arr.findIndex(el => el.id === id);
    const updatedTask = { ...arr[taskIndex], [prop]: !arr[taskIndex][prop] };
    //update state arr
    return [
      ...arr.slice(0, taskIndex),
      updatedTask,
      ...arr.slice(taskIndex + 1)
    ];
  }

  toggleDone = id => {
    this.setState(({ todoArr }) => {
      return {
        todoArr: this.toggleProp(todoArr, id, "done"),
      };
    });
  };

  toggleImportant = id => {
    this.setState(({ todoArr }) => {
      return {
        todoArr: this.toggleProp(todoArr, id, "important"),
      };
    });
  };

  deleteTask = id => {
    this.setState(({ todoArr }) => {
      const taskIndex = todoArr.findIndex(el => el.id === id);
      const newArr = [
        ...todoArr.slice(0, taskIndex),
        ...todoArr.slice(taskIndex + 1)
      ];
      return { todoArr: newArr };
    });
  };

  onFilterChange = text => {
    this.setState({ inputFilterValue: text });
  };


  filterTask(arr, text) {
    return arr.filter(task => task.label
      .toLowerCase()
      .includes(text.toLowerCase()));
  }

  onFilterBtnClick = bntName => {
    this.setState({ btnFilterValue: bntName });
  };

  onFilterBtnChange = (arr, filterBntValue) => {
    switch (filterBntValue) {
      case "all": return arr;
      case "active": return arr.filter(task => !task.done);
      case "done": return arr.filter(task => task.done);
      case "important": return arr.filter(task => task.important);
      default: return arr;
    }
  };

  render() {
    const { todoArr, inputFilterValue, btnFilterValue } = this.state;
    const visibleTasks = this.onFilterBtnChange(this.filterTask(todoArr, inputFilterValue), btnFilterValue);

    return (
      <div className="container">
        <Header
          onFilterChange={ this.onFilterChange }
          activeBnt={ btnFilterValue }
          onFilterBtnClick={ this.onFilterBtnClick }
        />
        <TodoList
          todoArr={ visibleTasks }
          taskClicked={ this.toggleDone }
          onBtnImportant={ this.toggleImportant }
          onBtnDelete={ this.deleteTask }
        />
        <InputTask
          onInputTask={ this.addTask }
        />
      </div>
    );
  }
}