import React from 'react';

interface FundWalletFormProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onCancel: () => void;
}

const Wallet: React.FC<FundWalletFormProps> = ({ onSubmit, onCancel }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-lg p-6 px-12 w-96 max-w-sm">
                <h2 className="text-3xl font-bold text-bg-gcolor mb-6 ">
                    Fund Wallet
                </h2>
                <form onSubmit={onSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Select Payment Method</label>
                        <div className="flex items-center space-x-4">
                            <label className="flex items-center border  border-[#8A8A8A] rounded-lg px-4 py-2 p-2">
                                <input type="radio" name="paymentMethod" value="Direct Pay" className="mr-2  accent-rose-500" />
                                Direct Pay
                            </label>
                            <label className="flex items-center border border-[#8A8A8A] rounded-lg py-2 px-4 p-2">
                                <input type="radio" name="paymentMethod" value="Credit Card" className="mr-2 accent-rose-500" />
                                Credit Card
                            </label>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="amount" className="block text-gray-700">Amount</label>
                        <input
                            id="amount"
                            type="text"
                            className="w-full border rounded-lg p-2 mt-1 border-[#8A8A8A] focus:outline-none"
                            placeholder="100,000"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="cardNumber" className="block text-gray-700">Card Number</label>
                        <input
                            id="cardNumber"
                            type="text"
                            className="w-full border rounded-lg p-2 mt-1 border-[#8A8A8A] focus:outline-none"
                            placeholder="0000 0000 0000 0000"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="cardHolderName" className="block text-gray-700">Card holder name</label>
                        <input
                            id="cardHolderName"
                            type="text"
                            className="w-full border rounded-lg p-2 mt-1 border-[#8A8A8A] focus:outline-none"
                            placeholder="Enter card holder name"
                        />
                    </div>
                    <div className="flex justify-between mb-4">
                        <div className="w-1/2 pr-2">
                            <label htmlFor="expiryDate" className="block text-gray-700">Expiry date</label>
                            <input
                                id="expiryDate"
                                type="text"
                                className="w-full border rounded-lg p-2 mt-1 border-[#8A8A8A] focus:outline-none"
                                placeholder="MM/YY"
                            />
                        </div>
                        <div className="w-1/2 pl-2">
                            <label htmlFor="cvc" className="block text-gray-700">CVC</label>
                            <input
                                id="cvc"
                                type="text"
                                className="w-full border rounded-lg p-2 mt-1 border-[#8A8A8A] focus:outline-none"
                                placeholder="000"
                            />
                        </div>
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
                            Fund
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Wallet;
