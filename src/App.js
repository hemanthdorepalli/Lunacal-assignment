import React from 'react';
import LeftSide from './LeftBox';  
import RightSide from './RightBox'; 
import './App.css';

function App() {
  return (
    <div className="flex h-screen gap-4 p-4">
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default App;
