import React from "react";

function TaskBtns(props) {

  const btns = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" },
    { name: "important", label: "!" },
  ];

  return (
    <div className="input-group-append" >
      {
        btns.map(btn => {

          const cls = ["btn"];

          props.activeBnt === btn.name
            ? cls.push("btn-primary")
            : cls.push("btn-outline-secondary");

          return (
            <button
              className={ cls.join(" ") }
              key={ btn.name }
              onClick={ () => props.onFilterBtnClick(btn.name) }
            >
              { btn.label }
            </button>
          );
        })
      }
    </div>
  );
}
export default TaskBtns;