import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Redirect to the static portfolio document to avoid iframe-related
    // deployment issues (headers/routing) on some hosts.
    window.location.replace('/my_portfolio_2026.html');
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}>
      Loading portfolio...
    </div>
  );
}

export default App;
