import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Mood Based ToDo List title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Mood Based ToDo List/i);
    expect(titleElement).toBeInTheDocument();
});

test('renders MoodSelector component', () => {
    render(<App />);
    const moodSelectorElement = screen.getByText(/Energized/i);
    expect(moodSelectorElement).toBeInTheDocument();
});

test('renders TaskInput component', () => {
    render(<App />);
    const taskInputElement = screen.getByLabelText(/Task Title/i);
    expect(taskInputElement).toBeInTheDocument();
});
