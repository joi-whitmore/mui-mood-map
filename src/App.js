import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import axios from 'axios';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ToDoList from './components/ToDoList';
import MoodSelector from './components/MoodSelector';
import TaskInput from './components/TaskInput';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
    // Manage state for tasks and selected mood
    const [selectedMood, setSelectedMood] = useState('');
    const [tasks, setTasks] = useState([]);

    // Fetch tasks from JSON Server when the component mounts
    useEffect(() => {
        console.log('Fetching tasks from JSON Server...');
        axios.get('http://localhost:5001/tasks')
            .then((response) => {
                console.log('Tasks fetched:', response.data);
                setTasks(response.data);
            })
            .catch((error) => {
                console.error('Error fetching tasks:', error);
            });
    }, []);

    // Function to handle mood selection
    const handleMoodSelect = (mood) => {
        setSelectedMood(mood);
    };

    // Function to add a new task via POST request
    const handleAddTask = (task) => {
        axios.post('http://localhost:5001/tasks', task)
            .then((response) => {
                setTasks((prevTasks) => [...prevTasks, response.data]);
            })
            .catch((error) => {
                console.error('Error adding task:', error);
            });
    };

    // Function to toggle task completion via PATCH request
    const handleToggleTaskComplete = (id) => {
        const taskToUpdate = tasks.find((task) => task.id === id);
        if (!taskToUpdate) return;

        const updatedTask = { ...taskToUpdate, isCompleted: !taskToUpdate.isCompleted };

        axios.patch(`http://localhost:5001/tasks/${id}`, updatedTask)
            .then((response) => {
                setTasks((prevTasks) =>
                    prevTasks.map((task) => (task.id === id ? response.data : task))
                );
            })
            .catch((error) => {
                console.error('Error updating task:', error);
            });
    };

    // Filter tasks based on selected mood
    const filteredTasks = tasks.filter((task) => {
        if (!selectedMood) return true; // Show all tasks if no mood is selected
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
            <Container
                maxWidth="sm"
                sx={{
                    backgroundColor: 'background.paper',
                    padding: 4,
                    borderRadius: 2,
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
                    marginTop: 5,
                }}
            >
                <Box textAlign="center">
                    <h1 style={{ color: '#ffffff' }}>Welcome to MUI Mood Map!</h1>
                    <MoodSelector onMoodSelect={handleMoodSelect} />
                    <TaskInput onAddTask={handleAddTask} />
                    <ToDoList tasks={filteredTasks} mood={selectedMood} onToggleTaskComplete={handleToggleTaskComplete} />
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default App;
