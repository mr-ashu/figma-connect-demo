import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';

function App() {
  return (
    <div className="App">
      <Button label="Click Me" onClick={() => alert('Button clicked')} />
    </div>
  );
}

export default App;
