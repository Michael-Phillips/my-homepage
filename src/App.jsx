// App.jsx - v1.3 - 2024-11-16
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
      minHeight: '100vh',  // CHANGED: from height to minHeight
      display: 'flex', 
      flexDirection: 'column'
      // REMOVED: overflow: 'hidden' - this was preventing scrolling
    }}>
      <header style={{ 
        padding: '1rem', 
        backgroundColor: '#f0f0f0',
        flexShrink: 0,  // Prevent header from shrinking
        position: 'sticky',  // ADDED: Makes header stick to top while scrolling
        top: 0,  // ADDED: Stick to top
        zIndex: 100  // ADDED: Ensure header stays above content
      }}>
        <h1 style={{ margin: 0 }}>My Homepage</h1>
        <nav style={{ display: 'flex', gap: '1rem', marginTop: '1rem', justifyContent: 'center' }}>
          <button onClick={() => setTab('Sensors')}>Sensors</button>
          <button onClick={() => setTab('Calendar')}>Calendar</button>
          <button onClick={() => setTab('MealMenu')}>Meal Menu</button>
        </nav>
      </header>
      <main style={{ 
        padding: tab === 'Sensors' ? 0 : '1rem',
        paddingBottom: tab === 'Calendar' ? '200px' : '80px',  // INCREASED: Much more padding for Calendar
        flex: 1,
        overflowY: 'auto',  // ADDED: Explicitly allow vertical scrolling
        WebkitOverflowScrolling: 'touch'  // ADDED: Smooth scrolling on iOS
        // REMOVED: overflow: 'hidden' and height: 0
      }}>
        {tab === 'Sensors' && <Sensors />}
        {tab === 'Calendar' && <Calendar />}
        {tab === 'MealMenu' && <MealMenu />}
      </main>
    </div>
  );
}

export default App;
