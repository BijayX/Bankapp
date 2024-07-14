import React from 'react';

const AccountBalance: React.FC = () => {
  return (
    <div className="account-balance p-4 bg-green-100 rounded-lg shadow-md">
      <span className="text-blueis font-medium">Main Account</span>
      <h2 className="text-3xl font-semibold">₦ 44,500.00</h2>
    </div>
  );
};

export default AccountBalance;
