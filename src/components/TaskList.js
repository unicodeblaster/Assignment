// src/components/TaskList.js  
import React from 'react';  
import { useSelector, useDispatch } from 'react-redux';  
import { deleteTask, markTaskCompleted } from '../features/taskSlice';  

const TaskList = () => {  
    const tasks = useSelector((state) => state.tasks.tasks);  
    const dispatch = useDispatch();  

    return (  
        <ul>  
            {tasks.map((task) => (  
                <li key={task.id}>  
                    <input  
                        type="checkbox"  
                        checked={task.completed}  
                        onChange={() =>  
                            dispatch(markTaskCompleted(task.id))  
                        }  
                    />  
                    {task.text}  
                    <button  
                        onClick={() => dispatch(deleteTask(task.id))}  
                    >  
                        Delete  
                    </button>  
                </li>  
            ))}  
        </ul>  
    );  
};  

export default TaskList;