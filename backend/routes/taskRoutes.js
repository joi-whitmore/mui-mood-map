const express = require('express');
const router = express.Router();
const { Task } = require('../models');

// Get all tasks
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create a new task
router.post('/tasks', async (req, res) => {
    const { title, description, taskType } = req.body;
    try {
        const newTask = await Task.create({ title, description, taskType });
        res.status(201).json(newTask);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update a task
router.patch('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    const { isCompleted } = req.body;
    try {
        const task = await Task.findByPk(id);
        if (task) {
            task.isCompleted = isCompleted;
            await task.save();
            res.status(200).json(task);
        } else {
            res.status(404).json({ error: 'Task not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a task
router.delete('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findByPk(id);
        if (task) {
            await task.destroy();
            res.status(200).json({ message: 'Task deleted successfully' });
        } else {
            res.status(404).json({ error: 'Task not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
