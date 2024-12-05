import React from 'react';
import { TextField, Box, MenuItem, Select, InputLabel, FormControl, Button } from '@mui/material';

function TaskInputForm({ taskTitle, setTaskTitle, taskDescription, setTaskDescription, taskType, setTaskType, handleAddTask }) {
    return (
        <Box display="flex" flexDirection="column" gap={2} my={2}>
            <TextField
                label="Task Title"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                variant="outlined"
                className={taskTitle ? 'task-input' : ''}
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
                className="text-field"
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

export default TaskInputForm;