import React from 'react';
import { Routes,Route } from 'react-router-dom'
import Home from './components/pages/Home';
import PlayCharacterPage from './components/pages/PlayCharacterPage';
import TrainTechnically from './components/pages/TrainTechnicallyPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='play-character' element={<PlayCharacterPage />}></Route>
      <Route path='train-technically' element={<TrainTechnically />}></Route>
    </Routes>
    
  );
}

export default App;
