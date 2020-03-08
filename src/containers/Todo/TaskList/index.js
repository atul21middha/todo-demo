import React from 'react';
import TaskItem from "./TaskItem";

const TaskList = ({taskList, onDeleteTask, onClickEditTask, onMarkCompleteTask}) => {


  return (
    <div className="min-vh-100">
      {taskList.length > 0 ?
        <>
          <div className="align-items-center">
            <div className="row">
              <div className="col-5 h4 font-weight-bold">
                Title
              </div>
              <div className="col-2 h4 font-weight-bold">
                Date
              </div>
              <div className="col-2 h4 font-weight-bold">
                Status
              </div>
              <div className="col-3 h4 font-weight-bold">
                Actions
              </div>
            </div>
          </div>
          {taskList.map(task => {
            return (
              <li key="task.id">
                <TaskItem task={task} key={task.id} onDeleteTask={onDeleteTask} onClickEditTask={onClickEditTask}
                          onMarkCompleteTask={onMarkCompleteTask}/>
              </li>
            )
          })}
        </>
        :
        <div className="align-content-center text-center align-items-center" >
          Oops! No Task Found.
        </div>
      }
    </div>
  )
};

export default TaskList;