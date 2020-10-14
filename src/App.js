import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js'
import RecommendedVideos from './components/RecommendedVideos.js'

function App() {
  return (
    //  BEM class naming convention
    
    <div className="app">
      <Header />

      <div className='app__page'>
          <Sidebar />
          <RecommendedVideos />
      </div>

    </div>
  );
}

export default App;
