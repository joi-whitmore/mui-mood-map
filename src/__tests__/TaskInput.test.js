// TaskInputList.test.js
// // src/__tests__/TaskInputList.test.js
import { render, screen } from '@testing-library/react';
import TaskInputList from '../components/TaskInput';

test('renders all task input fields', () => {
    render(<TaskInputList />);
    const taskTitleElement = screen.getByLabelText(/Task Title/i);
    const taskDescriptionElement = screen.getByLabelText(/Task Description/i);
    const taskTypeElement = screen.getByLabelText(/Task Type/i);

    expect(taskTitleElement).toBeInTheDocument();
    expect(taskDescriptionElement).toBeInTheDocument();
    expect(taskTypeElement).toBeInTheDocument();
});

test('submit adds a new task', () => {
    render(<TaskInputList />);
    const taskTitleElement = screen.getByLabelText(/Task Title/i);
    const taskDescriptionElement = screen.getByLabelText(/Task Description/i);
    const taskTypeElement = screen.getByLabelText(/Task Type/i);
    const addTaskButton = screen.getByText(/Add Task/i);

    taskTitleElement.value = 'New Task';
    taskDescriptionElement.value = 'New Task Description';
    taskTypeElement.value = 'Focused';

    addTaskButton.click();

    expect(taskTitleElement.value).toBe("New Task");
    expect(taskDescriptionElement.value).toBe("New Task Description");
    expect(taskTypeElement.value).toBe("Focused");
});
