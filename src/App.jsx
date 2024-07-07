
import React from 'react';
import { Routes,Route } from 'react-router-dom'
import Home from './components/pages/Home.jsx';
import PlayCharacterPage from './components/pages/PlayCharacterPage.jsx';
import TrainTechnically from './components/pages/TrainTechnicallyPage.jsx';
import LandingPage from './components/pages/LandingPage.jsx';
import LogoutButton from './components/Logout.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />}></Route>
      <Route path='Home' element={<Home />}></Route>
      <Route path='play-character' element={<PlayCharacterPage />}></Route>
      <Route path='train-technically' element={<TrainTechnically />}></Route>
      <Route path='logout' element={<LogoutButton />}></Route>
    </Routes>
    
  );
}

export default App;
