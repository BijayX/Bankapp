import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaPlus } from 'react-icons/fa';
import Wallet from '../Modal/Wallet';
import Form from '../Modal/Form';
import AddAccount from '../Modal/AddAccount';

const AccountCard: React.FC<{
    title: string;
    balance: string;
    showBalance: boolean;
    toggleShowBalance: () => void;
    hideButtons?: boolean;
    isNew?: boolean;
}> = ({ title, balance, showBalance, toggleShowBalance, hideButtons = false, isNew = false }) => {
    const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
    const [isFundModalOpen, setIsFundModalOpen] = useState(false);
    const [isAddAccountModalOpen, setIsAddAccountModalOpen] = useState(false);

    const handleOpenWithdrawModal = () => {
        setIsWithdrawModalOpen(true);
    };

    const handleCloseWithdrawModal = () => {
        setIsWithdrawModalOpen(false);
    };

    const handleOpenFundModal = () => {
        setIsFundModalOpen(true);
    };

    const handleCloseFundModal = () => {
        setIsFundModalOpen(false);
    };

    const handleOpenAddAccountModal = () => {
        setIsAddAccountModalOpen(true);
    };

    const handleCloseAddAccountModal = () => {
        setIsAddAccountModalOpen(false);
    };

    const handleSubmitWithdraw = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Withdraw Form submitted');
        handleCloseWithdrawModal();
    };

    const handleSubmitFund = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Fund Form submitted');
        handleCloseFundModal();
    };

    const handleSubmitAddAccount = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Add Account Form submitted');
        handleCloseAddAccountModal();
    };

    if (isNew) {
        return (
            <div className="bg-[#F0F0F0] hover:bg-bg-gcolor   w-64 h-40 rounded-lg p-6 flex flex-col ">
                <button onClick={handleOpenAddAccountModal} className="flex items-center justify-center gap-10 mb-14">
                    <FaPlus size={16} className='text-blueis' />
                    <h1  className="text-base text-blueis font-semibold">Add Account</h1>
                </button>
                <p className="text-2xl font-semibold">₦ 00,000.00</p>
                {isAddAccountModalOpen && (
                    <AddAccount
                        onSubmit={handleSubmitAddAccount}
                        onCancel={handleCloseAddAccountModal}
                    />
                )}
            </div>
        );
    }

    return (
        <>
            <div className={`bg-[#D4F3E7] rounded-lg p-6 ${hideButtons ? 'w-80 h-24' : 'w-64 h-40'} `}>
                <div className="flex justify-between items-center">
                    <h3 className="text-blueis font-medium">{title}</h3>
                    <button onClick={toggleShowBalance} className="text-gray-500">
                        {showBalance ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>
                <p className="text-2xl font-semibold mt-2">{showBalance ? balance : 'XXXXXXXX'}</p>
                {!hideButtons && (
                    <div className="flex justify-between mt-4">
                        <button
                            onClick={handleOpenFundModal}
                            className="bg-bg-gcolor text-white text-sm font-bold py-2 px-4 rounded"
                        >
                            Fund
                        </button>
                        <button
                            onClick={handleOpenWithdrawModal}
                            className="bg-[#D4D4D4] text-black font-bold text-sm py-2 px-4 rounded"
                        >
                            Withdraw
                        </button>
                    </div>
                )}
            </div>
            {isWithdrawModalOpen && (
                <Form onSubmit={handleSubmitWithdraw} onCancel={handleCloseWithdrawModal} />
            )}
            {isFundModalOpen && (
                <Wallet onSubmit={handleSubmitFund} onCancel={handleCloseFundModal} />
            )}
        </>
    );
};

export default AccountCard;
