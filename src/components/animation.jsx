import React, { useEffect } from 'react';
import Typed from 'typed.js';

function AnimatedText() {
  useEffect(() => {
    // Initialize Typed outside the component
    var typed = new Typed('#element', {
      strings: ['Creatives', 'Artists', 'Dancers'],
      typeSpeed: 60,
    });

    // Cleanup function
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='ml-[150px] flex-col items-center mt-[120px]'>
      <h1 className="text-black text-[150px] font-black font-['Inter'] h-[140px]">Hello!!</h1>
      <span className="text-secondary text-[170px] font-black font-['Inter']" id="element"></span>

      <p className="w-[700px] h-[70px] text-black text-[30px] font-black font-['Inter']">
        Ready to Unlock Your <span className="text-secondary text-[35px] font-black font-['Inter']">Creative</span> Potential?</p>
    </div>
  );
}

export default AnimatedText;
