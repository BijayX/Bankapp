import React from 'react';

interface WithdrawFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
}

const Form: React.FC<WithdrawFormProps> = ({ onSubmit, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-6  px-10 w-96 max-w-sm">
        <h2 className="text-3xl font-bold text-bg-gcolor mb-6 ">
          Withdraw
        </h2>
        <form onSubmit={onSubmit} className=''>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-base font-bold">Amount</label>
            <input
              id="amount"
              type="text"
              className="w-full border rounded-lg p-2 mt-2 focus:outline-none "
              placeholder="100,000"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="accountNumber" className="block text-base font-bold">Account Number</label>
            <input
              id="accountNumber"
              type="text"
              className="w-full border rounded-lg p-2 mt-1 focus:outline-none"
              placeholder="00 00 00 00 00"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="accountName" className="block text-base font-bold">Account Name</label>
            <input
              id="accountName"
              type="text"
              className="w-full border rounded-lg p-2 mt-1 focus:outline-none"
              placeholder="Enter account name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="bank" className="block text-base font-bold">Bank</label>
            <select id="bank" className="w-full border rounded-lg p-2 mt-1">
              <option value="">Bank Name</option>
            </select>
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
              Withdraw
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
