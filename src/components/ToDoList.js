import React from 'react';
import { Card, Typography, Box, Checkbox, Grid } from '@mui/material';

function ToDoList({ tasks = [], mood, onToggleTaskComplete }) {
    // Filter tasks based on the selected mood
    const filteredTasks = tasks.filter((task) => {
        if (!mood) return true; // If no mood is selected, show all tasks
        return task.taskType.toLowerCase().includes(mood.toLowerCase());
    });

    return (
        <Box display="flex" flexDirection="column" gap={3} p={2}>
            <Typography variant="h4" gutterBottom color="text.primary">
                Task List
            </Typography>
            <Grid container spacing={3}>
                {filteredTasks.map((task, index) => (
                    <Grid item xs={12} key={index}>
                        <Card
                            variant="outlined"
                            sx={{
                                backgroundColor: 'background.paper',
                                padding: 2,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                            }}
                        >
                            <Checkbox
                                checked={task.isCompleted}
                                onChange={() => onToggleTaskComplete(index)}
                                sx={{ color: 'primary.main', marginRight: 2 }}
                            />
                            <Box display="flex" flexDirection="column" flexGrow={1}>
                                <Typography
                                    variant="h6"
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
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ToDoList;
