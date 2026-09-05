import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeString = format(currentTime, 'HH:mm:ss');
  const dateString = format(currentTime, 'MMMM do, yyyy');
  const dayString = format(currentTime, 'EEEE');

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="app-container" data-theme={isDark ? 'dark' : 'light'}>
      <div className="clock-container">
        <div className="clock-header">
          <span className="clock-title"> East African Time</span>
          <button onClick={toggleTheme} className="theme-toggle">
            {isDark ? 'Light' : 'Dark'}
          </button>
        </div>

        <div className="time-display">{timeString}</div>
        <div className="date-display">{dateString}</div>
        <div className="day-display">{dayString}</div>
      </div>
    </div>
  );
}

export default App;