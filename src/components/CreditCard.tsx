import React from 'react';
import Bank from '../assets/Reen_bank.png'

const Creditcard: React.FC = () => {
  return (
    <div className="relative">
      <img src={Bank} alt="reen" className="rotate-6 w-96 h-96" />
    </div>
  );
}

export default Creditcard;
