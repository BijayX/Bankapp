import React from 'react';

const UpgradeToPro: React.FC = () => {
  return (
    <div className="bg-green-500 text-white rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-2">Upgrade to PRO</h2>
      <p className="mb-4">Sign in on more than one device</p>
      <button className="bg-white text-green-500 py-2 px-4 rounded-full hover:bg-green-100 transition duration-200">
        →
      </button>
    </div>
  );
};

export default UpgradeToPro;