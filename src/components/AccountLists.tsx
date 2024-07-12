import React from 'react';

const AccountsLists: React.FC = () => {
  const accounts = [
    { name: 'Main Account', balance: '₦ 44,500.00' },
    { name: 'School Savings', balance: '₦ 44,500.00' },
    { name: 'Holiday Plan', balance: '₦ 44,500.00' },
  ];

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Accounts</h2>
        <button className="text-green-500 hover:text-green-600">+</button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {accounts.map((account, index) => (
          <div key={index} className="bg-green-100 rounded-lg p-4">
            <h3 className="font-semibold mb-2">{account.name}</h3>
            <p className="text-2xl font-bold">{account.balance}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountsLists;