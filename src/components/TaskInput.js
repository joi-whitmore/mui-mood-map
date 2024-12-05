import React, { useState } from 'react';
import {TextField, Button, Box, MenuItem, Select, InputLabel, FormControl} from '@mui/material';

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
        <Box display="flex" flexDirection="column" gap={2} my={2}>
            <TextField
                label="Task Title"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                variant="outlined"
                InputLabelProps={{
                    style: { color: '#b0b0b0' }, // Light grey label for dark mode
                }}
                sx={{
                    backgroundColor: 'background.paper',
                    color: 'text.primary',
                }}
            />
            <TextField
                label="Task Description"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                variant="outlined"
                multiline
                rows={2}
                sx={{
                    backgroundColor: 'background.paper',
                    color: 'text.primary',
                }}
            />
            <FormControl variant="outlined">
                <InputLabel id="task-type-label" sx={{ color: '#b0b0b0' }}>
                    Task Type
                </InputLabel>
                <Select
                    labelId="task-type-label"
                    value={taskType}
                    onChange={(e) => setTaskType(e.target.value)}
                    label="Task Type"
                    sx={{
                        backgroundColor: 'background.paper',
                        color: 'text.primary',
                    }}
               >
                    <MenuItem value="Creative">Creative</MenuItem>
                    <MenuItem value="Focused">Focused</MenuItem>
                    <MenuItem value="High Energy">High Energy</MenuItem>
                    <MenuItem value="Low Energy">Low Energy</MenuItem>
                </Select>
            </FormControl>
            <Button
                variant="contained"
                color="success"
                onClick={handleAddTask}
                sx={{ fontWeight: 'bold' }}
            >
                Add Task
            </Button>
        </Box>
    );
}

export default TaskInput;
// In this component, we have a form with three input fields: Task Title, Task Description, and Task Type. 
// The Task Type field is a select dropdown with four options: Creative, Focused, High Energy, and Low Energy. 
// When the user clicks the Add Task button, the handleAddTask function is called, which creates a new task 
// object and calls the onAddTask function passed as a prop from the parent component (App.js). The task object 
// is then reset to empty strings to clear the form fields.