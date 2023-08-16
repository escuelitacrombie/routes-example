import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Homepage</h1>
      <Link to='/ruta'>Ruta</Link>
    </div>
  );
}

export default App;
