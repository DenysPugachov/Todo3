import React from "react";
import TaskBtns from "../TaskBtns/TaskBtns";

function Header(props) {

  return (
    <div >
      <h1 className="text-danger">Todo list 3 App</h1>
      <div className="input-group mb-2">
        <input
          className="form-control"
          placeholder="Task filter..."
          onChange={ e => props.onFilterChange(e.target.value) }
        />
        <TaskBtns
          activeBnt={ props.activeBnt }
          onFilterBtnClick={ props.onFilterBtnClick }
        />
      </div>
    </div >
  );
};


export default Header;
