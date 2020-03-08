import React from 'react';
import Todo from "./containers/Todo";

const App = () => {
  return (
    <div>
      <div className="bg-primary w-100 text-center p-3 h1">Todo App</div>
      <Todo/>
    </div>
  )
};

export default App;