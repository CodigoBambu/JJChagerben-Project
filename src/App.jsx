import React, { useState } from 'react';
import './styles/App.css';
import Hero from './sections/Hero';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
    </>
  );
}

export default App;