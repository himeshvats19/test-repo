import React from 'react';

interface ToggleButtonProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ isDarkMode, onToggle }) => {
  return (
    <button className="toggle-button" onClick={onToggle}>
      {isDarkMode ? '🌙' : '☀️'}
    </button>
  );
};

export default ToggleButton;