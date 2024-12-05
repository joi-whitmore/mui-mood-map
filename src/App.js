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
    // Step 1: Manage state for tasks and selected mood
    const [selectedMood, setSelectedMood] = useState('');
    const [tasks, setTasks] = useState([]);

    // Step 2: useEffect to fetch tasks when component mounts
    useEffect(() => {
        axios.get('http://localhost:5001/tasks')  // Ensure this URL matches your JSON Server port
            .then((response) => {
                console.log('Tasks fetched:', response.data);
                setTasks(response.data);  // Set tasks with the data fetched from JSON Server
            })
            .catch((error) => {
                console.error('Error fetching tasks:', error);
            });
    }, []);  // Empty dependency array means this effect runs only once after the initial render

    // Step 3: Function to handle mood selection
    const handleMoodSelect = (mood) => {
        setSelectedMood(mood);
    };

    // Step 4: Function to handle adding a new task
    const handleAddTask = (task) => {
        axios.post('http://localhost:5001/tasks', task)
            .then((response) => {
                setTasks((prevTasks) => [...prevTasks, response.data]);
            })
            .catch((error) => {
                console.error('Error adding task:', error);
            });
    };

    // Step 5: Function to toggle task completion
    const handleToggleTaskComplete = (index) => {
        const taskToUpdate = tasks[index];
        const updatedTask = { ...taskToUpdate, isCompleted: !taskToUpdate.isCompleted };

        axios.patch(`http://localhost:5001/tasks/${taskToUpdate.id}`, updatedTask)
            .then((response) => {
                setTasks((prevTasks) =>
                    prevTasks.map((task, i) => (i === index ? response.data : task))
                );
            })
            .catch((error) => {
                console.error('Error updating task:', error);
            });
    };

    // Step 6: Define the theme for dark mode
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

    // Step 7: Return the UI elements
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
                    <ToDoList tasks={tasks} mood={selectedMood} onToggleTaskComplete={handleToggleTaskComplete} />
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default App;
