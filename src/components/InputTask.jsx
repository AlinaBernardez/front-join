import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const InputTask = () => {
    const navigate = useNavigate()
    const inputRef = useRef()
    const [text, setText] = useState('')
    const [error, setError] = useState(null)
    const urlAPI = 'http://localhost:3000/create'

    const addTask = async() => {
        const newTask = {title: text}
        try {
            await fetch(urlAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(newTask),
            })
        }
        catch (err) {
            setError(err)
        }
    }

    return (
        <>
            <h2>Create task</h2>
            <input type='text' id='task' onChange={() => setText(inputRef.current.value)} ref={inputRef}/>
            <button onClick={() => {
                addTask()
                navigate('/')
            }}>Add task</button>
            {error && <h3>{error.message}</h3>}
        </>
    );
};

export default InputTask;
