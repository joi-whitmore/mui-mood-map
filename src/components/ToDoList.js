import React from 'react';
import { Card, Typography, Box, Checkbox } from '@mui/material';

function ToDoList({ tasks = [], mood, onToggleTaskComplete }) {
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
                        key={task.id} // Changed from index to task.id
                        variant="outlined"
                        sx={{
                            backgroundColor: 'background.paper',
                            padding: 2,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
                            borderRadius: 2,
                        }}
                    >
                        <Checkbox
                            checked={task.isCompleted}
                            onChange={() => {
                                console.log(`Toggling task completion for: ${task.title}`);
                                onToggleTaskComplete(task.id);
                            }}
                            sx={{
                                color: 'primary.main',
                                marginRight: 2,
                                '&.Mui-checked': {
                                    color: 'primary.main',
                                },
                            }}
                        />
                        <Box display="flex" flexDirection="column" flexGrow={1}>
                            <Typography
                                variant="h6"
                                className={`task-title-${task.id}`} // Adding a unique class name
                                sx={{
                                    fontWeight: 'bold',
                                    textDecoration: task.isCompleted ? 'line-through' : 'none',
                                    color: 'text.primary',
                                }}
                            >
                                {task.title}
                            </Typography>
                            {task.description && (
                                <Typography
                                    variant="body2"
                                    className={`task-description-${task.id}`} // Adding a unique class name
                                    sx={{
                                        textDecoration: task.isCompleted ? 'line-through' : 'none',
                                        color: 'text.secondary',
                                        marginTop: 0.5,
                                    }}
                                >
                                    {task.description}
                                </Typography>
                            )}
                        </Box>
                        <Typography
                            color="text.secondary"
                            variant="body2"
                            sx={{ marginLeft: 'auto', marginRight: 1 }}
                        >
                            [{task.taskType}]
                        </Typography>
                    </Card>
                ))}
            </Box>
        </Box>
    );
}

export default ToDoList;
