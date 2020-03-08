import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";


const AddTask = ({onToggleIsAddTaskModal, selectedTask, isAddTaskOpen, onEditTask, onAddTask}) => {

  const [title, setTitle] = useState(selectedTask ? selectedTask.title : "");
  const [status, setStatus] = useState(selectedTask ? selectedTask.status : 0);

  const saveTask = () => {
    if (selectedTask) {
      const data = {
        ...selectedTask, title, status
      };
      onEditTask(data);
      onToggleIsAddTaskModal();
    } else {
      if (title !== "") {
        const data = {
          title, status,
          id: (Math.random() * 10000).toFixed()
        };
        onAddTask(data);
        onToggleIsAddTaskModal();
      }
    }
  };

  return (
    <Modal show={isAddTaskOpen} onHide={() => onToggleIsAddTaskModal()}>
      <Modal.Header closeButton>
        <Modal.Title>{selectedTask ? "Edit Task Details" : "Add Task"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div>
            <label>Title</label>
            <div>
              <input
                name="title"
                type="text"
                placeholder="title"
                value={title}
                className="w-100 mb-2"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label>Status</label>
            <div>
              <select name="favoriteColor" value={status} className="w-100 mb-2"
                      onChange={(e) => setStatus(e.target.value)}>
                <option value={0}>Pending</option>
                <option value={1}>In-progress</option>
                <option value={2}>Completed</option>
              </select>
            </div>
          </div>
          <div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => onToggleIsAddTaskModal()}>
          Close
        </Button>
        <Button variant="primary" onClick={saveTask}>
          {selectedTask ? "Save" : "Add"}
        </Button>
      </Modal.Footer>
    </Modal>

  )
};

export default AddTask;