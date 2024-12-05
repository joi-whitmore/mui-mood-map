import { render, screen, fireEvent } from '@testing-library/react';
import MoodSelector from '../components/MoodSelector';

test('renders all mood buttons and triggers mood selection', () => {
    const mockOnMoodSelect = jest.fn();

    render(<MoodSelector onMoodSelect={mockOnMoodSelect} />);

    // Check that all mood buttons are rendered
    const moods = ['Energized', 'Focused', 'Creative', 'Tired'];
    moods.forEach((mood) => {
        expect(screen.getByText(mood)).toBeInTheDocument();
    });

    // Click on the "Tired" button and verify if the callback is called
    fireEvent.click(screen.getByText('Tired'));
    expect(mockOnMoodSelect).toHaveBeenCalledWith('Tired');
});
