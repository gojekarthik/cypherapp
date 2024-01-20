import React from 'react';
import NavBar from '../navbar.jsx';
import '../style.css';
import AnimatedText from '../animation';
import TraningChoice from '../Trainingchoice';
import { useNavigate } from 'react-router-dom';


function Home() {
    const navigate = useNavigate();
  return (
    <div className="bg-slate-200 h-screen">
      <NavBar />
      <div className='flex justify-between items-center'>
        <div>
          <AnimatedText />
        </div>
        <div className='flex flex-col space-y-10 mr-[240px] mt-[150px]'>
          <button onClick={()=>navigate('train-technically')}>
            <TraningChoice textContent="Train Technically" />
          </button>
          <button onClick={()=>navigate('play-character')}>
            <TraningChoice textContent="Play Character" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
