import React from "react";

export default function TaskBtn(props) {
  const { onBtnImportant, onBtnDelete } = props;

  return (
    <div>
      <button
        className="btn btn-outline-primary mr-1"
        onClick={ onBtnImportant }
      >
        !
          </button>
      <button
        className="btn btn-outline-danger"
        onClick={ onBtnDelete }
      >
        X
        </button>
    </div>
  );
};

// export default TaskBtn;