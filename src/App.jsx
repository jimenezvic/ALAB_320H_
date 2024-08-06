import React, { useState } from 'react';
import Heading from './components/Heading';
import Form from './components/Form';
import Task from './components/Task';
import TaskList from './components/TaskList';

const App = () => {
  
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    console.log(task)
    setTasks([...tasks, {id: Date.now(), text: task}]);
  };
  
  const deleteTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id))
  }

  const editTask = (id, newText) => {
    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, text: newText } : task
    ));

  }
  return (
    <>
      <Heading />
      <Form addTask={addTask}/>
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask}/>
      
    </>
  );
};

export default App;
