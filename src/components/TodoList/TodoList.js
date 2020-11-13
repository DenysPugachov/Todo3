import React from "react";
import TaskBtn from "../TaskBtn/TaskBtn";
import "./TodoList.css";

function TodoList(props) {
  const { todoArr, taskClicked, onBtnImportant, onBtnDelete } = props;

  return (
    <ul className="list-group  ">
      {
        todoArr.map(task => {

          const cls = ["list-group-item", "d-flex", "justify-content-between", "rounded"];

          if (task.done) { cls.push("done"); }
          if (task.important) { cls.push("text-primary", "font-weight-bold"); }

          return (
            <li
              className={ cls.join(" ") }
              key={ task.label }
            >
              <span
                onClick={ () => taskClicked(task.id) }
              >
                { task.label }
              </span>
              <TaskBtn
                onBtnImportant={ () => onBtnImportant(task.id) }
                onBtnDelete={ () => onBtnDelete(task.id) }
              />
            </li>
          );
        }) }
    </ul>
  );
}

export default TodoList;
