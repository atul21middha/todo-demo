import React from 'react';

const TaskItem = ({task, onDeleteTask, onClickEditTask, onMarkCompleteTask}) => {

  const onGetTaskName = (value) => {
    if (value === 0) {
      return "Pending"
    } else if (value === 1) {
      return "In-progress"
    } else {
      return "Completed"
    }
  };

  const markCompleteTask = () => {
    let data = {
      ...task,
      status: task.status !== 3 ? 3 : 2
    };
    onMarkCompleteTask(data)
  };

  return (
    <div className="align-items-center">
      <div className="row">
        <div className="col-5">
          {task.title}
        </div>
        <div className="col-2">
          {onGetTaskName(task.status)}
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success" onClick={() => markCompleteTask()}>{task.status !== 3 ?
            "Mark as Completed" : "Reopen Task"}
          </button>
        </div>
        <div className="col-3">
          {task.status !== 3 ? <button type="button" className="btn btn-secondary mr-1"
                                       onClick={() => onClickEditTask(task)}>Edit</button> : null}
          <button type="button" className="btn btn-danger" onClick={() => onDeleteTask(task.id)}>Delete</button>
        </div>
      </div>
    </div>
  )
};

export default TaskItem;