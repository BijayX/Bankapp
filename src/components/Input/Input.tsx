import React from 'react';
import { IconType } from 'react-icons';

interface InputProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  icon?: IconType; // Optional icon prop
  forgotPasswordLink?: string; // Optional forgot password link prop
}

const Input: React.FC<InputProps> = ({ id, label, type, placeholder, icon: Icon, forgotPasswordLink }) => {
  return (
    <div className="mb-4 relative">
      <label htmlFor={id} className="block font-bold mb-2">{label}</label>
      <div className="relative flex items-center border border-[#8A8A8A] rounded-lg focus-within:ring-2 focus-within:ring-green-600">
        <input
          type={type}
          id={id}
          className="p-2 pl-3 pr-40 w-full border-none rounded-lg focus:outline-none placeholder-[#B8B8B8]"
          placeholder={placeholder}
        />
        {forgotPasswordLink && (
          <>
            <div className="absolute right-28 h-6  border-l-2 border-[#B8B8B8]"></div>
            <a href={forgotPasswordLink} className="absolute right-12 text-bg-gcolor text-sm">
              Forgot?
            </a>
          </>
        )}
        {Icon && (
          <div className="absolute right-3 text-[#B8B8B8]">
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
