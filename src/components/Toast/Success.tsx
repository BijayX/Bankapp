import React from 'react';
import Toast from './Toast';

const SuccessMessage: React.FC = () => {
  const handleGoToDashboard = () => {
    console.log('Navigating to dashboard');
  };

  return (
    <Toast
      type="success"
      message="Your account has been created Successfully!"
      buttonText="Go to Dashboard"
      onButtonClick={handleGoToDashboard}
    />
  );
};

export default SuccessMessage;