import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ToDoList from './components/ToDoList';
import MoodSelector from './components/MoodSelector';
import TaskInput from './components/TaskInput';
import CssBaseline from '@mui/material/CssBaseline';
import useTasks from './hooks/useTasks';
import useMood from './hooks/useMood';

function App() {
    // Manage state for tasks and selected mood
    const { tasks, addTask, toggleTaskComplete, deleteTask } = useTasks();
    const { selectedMood, handleMoodSelect } = useMood();

    const filteredTasks = tasks.filter((task) => {
        if (!selectedMood) return true;
        return task.taskType.toLowerCase() === selectedMood.toLowerCase();
    });

    // Create a dark theme for the application
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            background: {
                default: '#121212',
                paper: '#1e1e1e',
            },
            text: {
                primary: '#ffffff',
                secondary: '#b0b0b0',
            },
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Container maxWidth="sm" className="container">
                <Box textAlign="center">
                    <h1 style={{ color: '#ffffff' }}>Mood Based ToDo List</h1>
                    <MoodSelector onMoodSelect={handleMoodSelect} />
                    <TaskInput onAddTask={addTask} />
                    <ToDoList
                        tasks={filteredTasks}
                        mood={selectedMood}
                        onToggleTaskComplete={toggleTaskComplete}
                        onDeleteTask={deleteTask}
                    />
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default App;
