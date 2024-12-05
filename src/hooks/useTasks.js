// src/hooks/useTasks.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useTasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5001/tasks')
            .then((response) => {
                setTasks(response.data);
            })
            .catch((error) => {
                console.error('Error fetching tasks:', error);
            });
    }, []);

    const addTask = (task) => {
        axios.post('http://localhost:5001/tasks', task)
            .then((response) => {
                setTasks((prevTasks) => [...prevTasks, response.data]);
            })
            .catch((error) => {
                console.error('Error adding task:', error);
            });
    };

    const toggleTaskComplete = (id) => {
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

    const deleteTask = (id) => {
        axios.delete(`http://localhost:5001/tasks/${id}`)
            .then(() => {
                setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
                console.log(`Task with ID ${id} deleted.`);
            })
            .catch((error) => {
                console.error('Error deleting task:', error);
            });
    };

    return { tasks, addTask, toggleTaskComplete, deleteTask };
};

export default useTasks;