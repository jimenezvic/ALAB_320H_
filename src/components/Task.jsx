import { useState, useEffect } from 'react';

function Task({ task, deleteTask, editTask }) {

  const [isEditing, setIsEditing] = useState(false);

  const [newText, setNewText] = useState(task.text);

//   useEffect(()=>{
//     console.log(task)
//     editTask(task.id, newText);
//   },[isEditing])

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
            
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          
        </>
      ) : (
        <>
          <p>{task.text}</p>
          <button onClick={handleEditToggle}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
  );
}

export default Task;
