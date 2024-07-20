// src/components/TaskInput.js  
import React, { useState } from 'react';  
import { useDispatch } from 'react-redux';  
import { addTask } from '../features/taskSlice';  

const TaskInput = () => {  
    const [newTaskText, setNewTaskText] = useState('');  
    const dispatch = useDispatch();  

    const handleSubmit = (event) => {  
        event.preventDefault();  
        if (newTaskText.trim() !== '') {  
            dispatch(addTask(newTaskText));  
            setNewTaskText('');  
        }  
    };  

    return (  
        <form onSubmit={handleSubmit}>  
            <input  
                type="text"  
                placeholder="Add a task..."  
                value={newTaskText}  
                onChange={(e) => setNewTaskText(e.target.value)}  
            />  
            <button type="submit">Add Task</button>  
        </form>  
    );  
};  

export default TaskInput;