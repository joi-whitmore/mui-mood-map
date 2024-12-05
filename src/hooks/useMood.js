// src/hooks/useMood.js
import { useState } from 'react';

const useMood = () => {
    const [selectedMood, setSelectedMood] = useState('');

    const moodMapping = {
        Energized: "High Energy",
        Focused: "Focused",
        Creative: "Creative",
        Tired: "Low Energy",
    };

    const handleMoodSelect = (mood) => {
        const mappedMood = moodMapping[mood] || mood;
        setSelectedMood(mappedMood);
    };

    return { selectedMood, handleMoodSelect };
};

export default useMood;