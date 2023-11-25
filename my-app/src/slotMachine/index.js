import React from 'react';
import { render } from 'react-dom';
import SlotsReels from './SlotsReel.js'

export default function App() {
  return (
    <SlotsReels />
  );
}


render(<App />, document.getElementById('root'));
