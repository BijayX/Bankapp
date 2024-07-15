import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface Transaction {
  id: number;
  name: string;
  type: string;
  date: string;
  amount: number;
  status: 'Pending' | 'Completed' | 'Canceled';
}

interface TransactionsProps {
  showHeader?: boolean;
}

const Transactions: React.FC<TransactionsProps> = ({ showHeader = true }) => {
  const navigate = useNavigate()
  const transactions: Transaction[] = [
    { id: 1, name: "Oluwaben Jamin", type: "Bank Transfer", date: "06.Mar.2023 - 09:39", amount: -10000.00, status: "Pending" },
    { id: 2, name: "Oluwaben Jamin", type: "Direct Pay", date: "06.Mar.2023 - 09:39", amount: 10000.00, status: "Completed" },
    { id: 3, name: "Oluwaben Jamin", type: "Bank Transfer", date: "06.Mar.2023 - 09:39", amount: -10000.00, status: "Canceled" },
    { id: 4, name: "Oluwaben Jamin", type: "Credit Card", date: "06.Mar.2023 - 09:39", amount: 10000.00, status: "Completed" },
    { id: 5, name: "Oluwaben Jamin", type: "Bank Transfer", date: "06.Mar.2023 - 09:39", amount: -10000.00, status: "Pending" },
    { id: 6, name: "Oluwaben Jamin", type: "Direct Pay", date: "06.Mar.2023 - 09:39", amount: 10000.00, status: "Completed" },
  ];

  const getStatusColor = (status: Transaction['status']): string => {
    switch (status) {
      case "Completed": return "bg-bg-gcolor text-white";
      case "Canceled": return "bg-[#E74F5B] text-white";
      default: return "bg-[#D4D4D4] text-[#555555]";
    }
  };

  return (
    <div className=" ">
      {showHeader && (
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Transactions</h2>
          <a onClick={()=>navigate("/page-transcations")} className="text-green-500 flex items-center">
            View All
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>  
      )}
      <div className="space-y-5">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between border-b pb-2 mb-2">
            <div className="flex items-center space-x-24">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${transaction.amount > 0 ? 'bg-bg-gcolor text-white' : 'bg-[#E74F5B] text-white'}`}>
                {transaction.amount > 0 ? <FaPlus size={12} /> : <FaMinus size={12} />}
              </div>
              <div className="flex items-center space-x-16 ">
                <span className="w-32 text-[#8C8C8C]">{transaction.name}</span>
                <span className="w-28 text-[#8C8C8C]">{transaction.type}</span>
                <span className="w-40 text-[#8C8C8C]">{transaction.date}</span>
                <span className={`w-24 text-right font-semibold ${transaction.amount > 0 ? 'text-bg-gcolor' : 'text-[#E74F5B]'}`}>
                  {transaction.amount > 0 ? '+' : '-'} {Math.abs(transaction.amount).toFixed(2)}
                </span>
                <span className={`w-36 h-8 flex items-center justify-center text-bold rounded-lg text-base ${getStatusColor(transaction.status)}`}>
                  {transaction.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
