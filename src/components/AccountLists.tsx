import React, { useState } from 'react';
import AddAccount from './Modal/AddAccount';

const AccountsLists: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState<{ name: string; balance: string } | null>(null);

  const accounts = [
    { name: 'Main Account', balance: '₦ 44,500.00' },
    { name: 'School Savings', balance: '₦ 44,500.00' },
    { name: 'Holiday Plan', balance: '₦ 44,500.00' },
  ];

  const openModal = (account: { name: string; balance: string }) => {
    setSelectedAccount(account);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAccount(null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    closeModal();
  };

  return (
    <div className="mb-6 bg-bgcolor">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Accounts</h2>
        <button
          className="text-3xl rounded-lg bg-[#D4F3E7] px-3 py-1 hover:text-black"
          onClick={() => openModal(accounts[0])} // Open modal with the first account as an example
        >
          +
        </button>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {accounts.map((account, index) => (
          <div key={index} className="bg-[#D4F3E7] text-center rounded-lg p-8 px-10">
            <h3 className="font-semibold text-left text-blueis mb-2">{account.name}</h3>
            <p className="text-2xl font-bold">{account.balance}</p>
          </div>
        ))}
      </div>

      {isModalOpen && selectedAccount && (
        <AddAccount
          onSubmit={handleSubmit}
          onCancel={closeModal}
          accountName={selectedAccount.name} 
          accountBalance={selectedAccount.balance}
        />
      )}
    </div>
  );
};

export default AccountsLists;
