import React from 'react';

const SideBar = ({onClickAddTask}) => {

  return (
    <div className="container bg-secondary p-2 h-100">
      <button type="button" className="btn btn-primary btn-lg btn-block mt-3" onClick={() => onClickAddTask()}>Add
        Task
      </button>
      {/*<div className="mt-4">*/}
      {/*  <div className="mt-2 mb-2  text-white">*/}
      {/*    Filter Tasks*/}
      {/*  </div>*/}
      {/*  <ul className="list-group">*/}
      {/*    <li className="list-group-item">Pending</li>*/}
      {/*    <li className="list-group-item">Completed</li>*/}
      {/*  </ul>*/}
      {/*</div>*/}
    </div>
  )
};

export default SideBar;