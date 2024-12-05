import React from 'react';
import { Card, Typography, Box, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './ToDoList.css';

function ToDoList({ tasks = [], mood, onToggleTaskComplete, onDeleteTask }) {
    // Filter tasks based on the selected mood
    const filteredTasks = tasks.filter((task) => {
        if (!mood) return true; // If no mood is selected, show all tasks
        return task.taskType.toLowerCase().includes(mood.toLowerCase());
    });

    return (
        <Box display="flex" flexDirection="column" gap={3} p={2}>
            <Typography variant="h4" gutterBottom color="text.primary" textAlign="center">
                Task List
            </Typography>
            <Box display="flex" flexDirection="column" gap={3}>
                {filteredTasks.map((task) => (
                    <Card
                        key={task.id}
                        variant="outlined"
                        className="task-card"
                    >
                        <Checkbox
                            checked={task.isCompleted}
                            onChange={() => {
                                onToggleTaskComplete(task.id);
                            }}
                            className="checkbox-custom"
                            sx={{
                                '&.Mui-checked': {
                                    color: 'primary.main',
                                },
                            }}
                        />
                        <Box display="flex" flexDirection="column" flexGrow={1}>
                            <Typography
                                variant="h6"
                                className={`task-title task-title-${task.id} ${task.isCompleted ? 'completed' : ''}`}
                            >
                                {task.title}
                            </Typography>
                            {task.description && (
                                <Typography
                                    variant="body2"
                                    className={`task-description ${task.isCompleted ? 'completed' : ''}`}
                                >
                                    {task.description}
                                </Typography>
                            )}
                        </Box>
                        <Typography
                            color="text.secondary"
                            variant="body2"
                            className="task-type"
                        >
                            [{task.taskType}]
                        </Typography>
                        {/* Delete Button */}
                        <IconButton
                            aria-label="delete"
                            onClick={() => onDeleteTask(task.id)}
                            sx={{ color: 'error.main' }}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </Card>
                ))}
            </Box>
        </Box>
    );
}

export default ToDoList;
