import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ItemDetailPage = ({task}) => {
  const [error, setError] = useState(null)
  const urlAPI = 'http://localhost:3000'
  const navigate = useNavigate()
  
  const deleteTask = async (id) => {
    try {
      await fetch(`${urlAPI}/delete/${id}`, {method: 'DELETE'})
    }
    catch (err) {
        console.log(err)
        setError(err)
    }}
  
  const handleCompleted = async(id) => {
    try {
      await fetch(`${urlAPI}/markascompleted/${id}`, {method: 'PUT'})
    }
    catch (err) {
      setError(err)
    }}

  return (
    <>
      <h2>{task.title}</h2>
      <p>{!task.completed ? 'Not completed' : 'Completed'}</p>
      <div>
        <button onClick={() => {
          deleteTask(task._id)
          navigate('/')
        }}>Delete Task</button>
        <button disabled={task.completed} onClick={() => handleCompleted(task._id)}>Mark as completed</button>
      </div>
      {error && <h3>{error.message}</h3>}
    </>
  )
};

export default ItemDetailPage;
