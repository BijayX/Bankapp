import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Transaction {
  type: 'credit' | 'debit';
  name: string;
  method: string;
  date: string;
  amount: string;
  status: 'Pending' | 'Completed' | 'Canceled';
}

interface TransactionsComponentProps {
  hideHeader?: boolean;
}

const Transactions: React.FC<Transaction> = ({ type, name, method, date, amount, status}) => {
  const statusColors = {
    Pending: 'bg-[#D4D4D4] text-gray-700',
    Completed: 'bg-bg-gcolor text-white',
    Canceled: 'bg-[#E74F5B] text-white',
  };

  return (
    <div className="flex items-center py-2">
      <div className="flex-grow grid grid-cols-8 gap-2 sm:gap-4 md:gap-6 lg:gap-14 items-center">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${type === 'credit' ? 'bg-green-500' : 'bg-red-500'} mr-4`}>
          <span className="text-white text-sm">{type === 'credit' ? '+' : '-'}</span>
        </div>
        <span className="col-span-2 text-sm font-medium overflow-hidden overflow-ellipsis whitespace-nowrap">{name}</span>
        <span className="col-span-2 text-sm overflow-hidden font-medium overflow-ellipsis whitespace-nowrap">{method}</span>
        <span className="col-span-2 text-xs text-gray-500 font-medium overflow-hidden overflow-ellipsis whitespace-nowrap">{date}</span>
        <span className={`col-span-2 text-right ${type === 'credit' ? 'text-green-500' : 'text-red-500'}`}>
          {amount}
        </span>
        <span className={`col-start-11 col-span-2 w-24 h-7 rounded text-xs flex items-center justify-center ${statusColors[status]}`}>
          {status}
        </span>
      </div>
    </div>
  );
};

const TransactionsComponent: React.FC<TransactionsComponentProps> = ({ hideHeader }) => {
  const navigate = useNavigate()
  const transactions: Transaction[] = [
    { type: 'debit', name: 'Oluwaben Jamin', method: 'Bank Transfer', date: '06.Mar.2023 - 09:39', amount: '- 10,000.00', status: 'Pending' },
    { type: 'credit', name: 'Oluwaben Jamin', method: 'Direct Pay', date: '06.Mar.2023 - 09:39', amount: '+ 10,000.00', status: 'Completed' },
    { type: 'debit', name: 'Oluwaben Jamin', method: 'Bank Transfer', date: '06.Mar.2023 - 09:39', amount: '- 10,000.00', status: 'Canceled' },
    { type: 'credit', name: 'Oluwaben Jamin', method: 'Credit Card', date: '06.Mar.2023 - 09:39', amount: '+ 10,000.00', status: 'Completed' },
    { type: 'debit', name: 'Oluwaben Jamin', method: 'Bank Transfer', date: '06.Mar.2023 - 09:39', amount: '- 10,000.00', status: 'Pending' },
    { type: 'credit', name: 'Oluwaben Jamin', method: 'Direct Pay', date: '06.Mar.2023 - 09:39', amount: '+ 10,000.00', status: 'Completed' },
    { type: 'debit', name: 'Oluwaben Jamin', method: 'Bank Transfer', date: '06.Mar.2023 - 09:39', amount: '- 10,000.00', status: 'Canceled' },
  ];

  return (
    <div>
      {!hideHeader && (
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Transactions</h2>
          <a onClick={()=>navigate("/page-transactions")} className="text-2xl font-extrabold text-green-500">→</a>
        </div>
      )}
      <div className="space-y-1">
        {transactions.map((transaction, index) => (
          <div key={index} className="border-b border-[#D9D9D9]">
            <Transactions {...transaction} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionsComponent;
