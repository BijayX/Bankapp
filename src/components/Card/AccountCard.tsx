import React from 'react';
import { FaEye, FaEyeSlash, FaPlus } from 'react-icons/fa';

const AccountCard: React.FC<{ title: string; balance: string; showBalance: boolean; toggleShowBalance: () => void; hideButtons?: boolean; isNew?: boolean }> = ({
    title,
    balance,
    showBalance,
    toggleShowBalance,
    hideButtons = false,
    isNew = false
}) => {
    if (isNew) {
        return (
            <div className="bg-[#F0F0F0] hover:bg-bg-gcolor text-[#555555] hover:text-white w-64 h-40 rounded-lg p-6 flex flex-col ">
                <div className="flex items-center justify-center gap-10 mb-14">
                    <FaPlus size={16} />
                    <h3 className="text-base font-semibold">Add Account</h3>
                </div>
                <p className="text-2xl font-semibold">₦ 00,000.00</p>
            </div>
        );
    }

    return (
        <div className={`bg-[#D4F3E7] rounded-lg p-6 ${hideButtons ? 'w-80 h-24' : 'w-64 h-40'} `}>
            <div className="flex justify-between items-center">
                <h3 className=" text-blueis font-medium">{title}</h3>
                <button onClick={toggleShowBalance} className="text-gray-500">
                    {showBalance ? <FaEyeSlash /> : <FaEye />}
                </button>
            </div>
            <p className="text-2xl font-semibold mt-2">
                {showBalance ? balance : 'XXXXXXXX'}
            </p>
            {!hideButtons && (
                <div className="flex justify-between mt-4">
                    <button className="bg-bg-gcolor text-white text-sm font-bold py-2 px-4 rounded">Fund</button>
                    <button className="bg-[#D4D4D4] text-black font-bold text-sm py-2 px-4 rounded">Withdraw</button>
                </div>
            )}
        </div>
    );
};

export default AccountCard;
