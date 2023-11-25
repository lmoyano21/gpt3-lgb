import React from 'react';
import { Navbar } from './components';
import './App.css'
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Outlet />
      </div>
      
    </div>
  )
}

export default App