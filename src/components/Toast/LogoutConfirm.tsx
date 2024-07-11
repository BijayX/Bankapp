import React from 'react';

interface LogoutConfirmProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const LogoutConfirm: React.FC<LogoutConfirmProps> = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80 max-w-sm">
        <h2 className="text-xl font-semibold text-[#6C6C6C] mb-6 text-center">
          Are you sure you want to Logout?
        </h2>
        <div className="flex justify-between space-x-4">
          <button
            onClick={onCancel}
            className="flex-1 bg-[#D4D4D4] font-bold py-2 px-4 rounded-md hover:bg-gray-300 transition duration-300"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-600 transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutConfirm;