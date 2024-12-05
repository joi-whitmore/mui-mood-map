import React, { useState } from 'react';
import TaskInputForm from "./TaskInputForm";

function TaskInput({ onAddTask }) {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskType, setTaskType] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const handleAddTask = () => {
        if (taskTitle && taskType) {
            onAddTask({
                title: taskTitle,
                taskType,
                description: taskDescription,
                isCompleted: false,
            });
            setTaskTitle('');
            setTaskType('');
            setTaskDescription('');
        }
    };

    return (
        <TaskInputForm
            taskTitle={taskTitle}
            setTaskTitle={setTaskTitle}
            taskDescription={taskDescription}
            setTaskDescription={setTaskDescription}
            taskType={taskType}
            setTaskType={setTaskType}
            handleAddTask={handleAddTask}
        />
    );
}

export default TaskInput;
// In this component, we have a form with three input fields: Task Title, Task Description, and Task Type. 
// The Task Type field is a select dropdown with four options: Creative, Focused, High Energy, and Low Energy. 
// When the user clicks the Add Task button, the handleAddTask function is called, which creates a new task 
// object and calls the onAddTask function passed as a prop from the parent component (App.js). The task object 
// is then reset to empty strings to clear the form fields.