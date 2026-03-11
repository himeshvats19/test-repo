import React, { useEffect, useState } from 'react';
import ToggleButton from './ToggleButton';
import './styles.css';

const GeneratedFeature: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <header className="header">
      <h1>My Application</h1>
      <ToggleButton isDarkMode={isDarkMode} onToggle={toggleTheme} />
    </header>
  );
};

export default GeneratedFeature;