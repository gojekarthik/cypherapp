
import React from 'react';
import { Routes,Route } from 'react-router-dom'
import Home from './components/pages/Home.jsx';
import PlayCharacterPage from './components/pages/PlayCharacterPage.jsx';
import TrainTechnically from './components/pages/TrainTechnicallyPage.jsx';
import LandingPage from './components/pages/LandingPage.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />}></Route>
      <Route path='Homepage' element={<Home />}></Route>
      <Route path='play-character' element={<PlayCharacterPage />}></Route>
      <Route path='train-technically' element={<TrainTechnically />}></Route>
    </Routes>
    
  );
}

export default App;
