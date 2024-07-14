import React from 'react';
import { HiOutlineMail } from "react-icons/hi";

import Input from '../../components/Input/Input';

const ResetPassword: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white shadow-md rounded-2xl p-8 w-1/3">
        <h1 className="text-3xl font-bold mb-4 text-bg-gcolor text-center">Reset Password</h1>
        <form>
          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="Enter your Email"
            icon={HiOutlineMail} 
          />
          <button
            type="submit"
            className="w-full bg-bg-gcolor text-white py-2 rounded-md hover:bg-[#288F69] transition duration-200 mt-4"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
