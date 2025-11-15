import { useState } from 'react';
import Sensors from './pages/Sensors';
import Calendar from './pages/Calendar';
import MealMenu from './pages/MealMenu';

function App() {
  const [tab, setTab] = useState('Sensors');

  return (
    <div style={{ 
      margin: 0, 
      padding: 0, 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      overflow: 'hidden'  // Prevent page scrolling
    }}>
      <header style={{ 
        padding: '1rem', 
        backgroundColor: '#f0f0f0',
        flexShrink: 0  // Prevent header from shrinking
      }}>
        <h1 style={{ margin: 0 }}>My Homepage</h1>
        <nav style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <button onClick={() => setTab('Sensors')}>Sensors</button>
          <button onClick={() => setTab('Calendar')}>Calendar</button>
          <button onClick={() => setTab('MealMenu')}>Meal Menu</button>
        </nav>
      </header>

      <main style={{ 
        padding: tab === 'Sensors' ? 0 : '1rem',
        flex: 1,
        overflow: 'hidden',
        height: 0  // Important: Forces flex child to respect parent height
      }}>
        {tab === 'Sensors' && <Sensors />}
        {tab === 'Calendar' && <Calendar />}
        {tab === 'MealMenu' && <MealMenu />}
      </main>
    </div>
  );
}

export default App;

