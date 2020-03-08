import React, {useEffect, useState} from 'react';
import SideBar from "./SideBar";
import TaskList from "./TaskList";
import {useDispatch, useSelector} from "react-redux";
import {addNewTask, deleteTask, getTaskList, updateTask} from "../../redux/actions/Todo";
import AddTask from "./AddTask";

const Todo = () => {

  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const dispatch = useDispatch();
  const {taskList} = useSelector(({todo}) => todo);

  useEffect(() => {
    dispatch(getTaskList())
  }, [taskList]);

  const onDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId))
  };

  const onToggleIsAddTaskModal = () => {
    setIsAddTaskOpen(!isAddTaskOpen)
  };

  const onClickAddTask = () => {
    setSelectedTask(null);
    onToggleIsAddTaskModal();
  };

  const onClickEditTask = (task) => {
    setSelectedTask(task);
    onToggleIsAddTaskModal();
  };

  const onAddTask = (task) => {
    dispatch(addNewTask(task))
  };

  const onEditTask = (task) => {
    dispatch(updateTask(task))
  };

  const onMarkCompleteTask = (task) => {
    dispatch(updateTask(task))
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <SideBar onClickAddTask={onClickAddTask}/>
        </div>
        <div className="col-8">
          <TaskList onDeleteTask={onDeleteTask} taskList={taskList}
                    onClickEditTask={onClickEditTask} onMarkCompleteTask={onMarkCompleteTask}/>
        </div>
      </div>
      {isAddTaskOpen ? <AddTask onToggleIsAddTaskModal={onToggleIsAddTaskModal} isAddTaskOpen={isAddTaskOpen}
                                selectedTask={selectedTask} onAddTask={onAddTask} onEditTask={onEditTask}/> : null}
    </div>
  )
};

export default Todo;