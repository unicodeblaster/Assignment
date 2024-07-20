// src/features/taskSlice.js  
import { createSlice } from '@reduxjs/toolkit';  

const initialState = {  
    tasks: [],  
};  

const taskSlice = createSlice({  
    name: 'tasks',  
    initialState,  
    reducers: {  
        addTask: (state, action) => {  
            state.tasks.push({  
                id: Date.now(), // Or use a more robust ID generation  
                text: action.payload,  
                completed: false,  
            });  
        },  
        deleteTask: (state, action) => {  
            state.tasks = state.tasks.filter(  
                (task) => task.id !== action.payload  
            );  
        },  
        markTaskCompleted: (state, action) => {  
            const taskIndex = state.tasks.findIndex(  
                (task) => task.id === action.payload  
            );  
            if (taskIndex !== -1) {  
                state.tasks[taskIndex].completed = true;  
            }  
        },  
    },  
});  

export const { addTask, deleteTask, markTaskCompleted } = taskSlice.actions;  
export default taskSlice.reducer;