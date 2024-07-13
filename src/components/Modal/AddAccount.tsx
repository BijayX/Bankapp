import React, { useState } from 'react';

interface WithdrawFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
  accountName: string; // Add these props
  accountBalance: string;
}

const AddAccount: React.FC<WithdrawFormProps> = ({ onSubmit, onCancel }) => {
  const [description, setDescription] = useState('');

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-6 px-12 w-96 max-w-sm">
        <h2 className="text-3xl font-bold text-bg-gcolor mb-6">Add Account</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label htmlFor="accountName" className="block text-base font-bold">Account Name</label>
            <input
              id="accountName"
              type="text"
              // value={accountName}
              className="w-full border border-bgcol rounded-lg p-2 mt-2 focus:outline-none"
              placeholder="Enter name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="bank" className="block text-base font-bold">Short Description</label>
            <textarea
              id="bank"
              value={description}
              onChange={handleDescriptionChange}
              placeholder='Description'
              className="w-full h-32 p-2 mt-2 border  focus:outline-none border-bgcol rounded-lg"
            />
          </div>
          <div className="flex justify-between space-x-4">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 bg-[#D4D4D4] font-bold py-2 px-4 rounded-lg hover:bg-[#D4D4D4] transition duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-bg-gcolor text-white py-2 px-4 rounded-lg hover:bg-[#288F69] transition duration-300"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAccount;
