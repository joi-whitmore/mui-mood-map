import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const moods = [
    { label: 'Energized', color: 'warning' },
    { label: 'Focused', color: 'info' },
    { label: 'Creative', color: 'secondary' },
    { label: 'Tired', color: 'primary' },
];

function MoodSelector({ onMoodSelect }) {
    return (
        <Box display="flex" justifyContent="center" gap={2} my={3}>
            {moods.map((mood) => (
                <Button
                    key={mood.label}
                    variant="contained"
                    color={mood.color}
                    sx={{
                        color: '#ffffff',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        boxShadow: '0px 3px 6px rgba(0,0,0,0.16)',
                    }}
                    onClick={() => onMoodSelect(mood.label)}
                >
                    {mood.label}
                </Button>
            ))}
        </Box>
    );
}

export default MoodSelector;
