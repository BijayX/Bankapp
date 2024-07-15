import React from 'react';
import { useNavigate } from 'react-router-dom';

const TransactionsList: React.FC = () => {
  const navigate = useNavigate()
  const transactions = [
    { name: 'Oluwaben Jamin', date: '06.Mar.2023 - 09:39', amount: '-10,000.00' },
    { name: 'Oluwaben Jamin', date: '06.Mar.2023 - 09:39', amount: '+10,000.00' },
    { name: 'Oluwaben Jamin', date: '06.Mar.2023 - 09:39', amount: '-10,000.00' },
    { name: 'Oluwaben Jamin', date: '06.Mar.2023 - 09:39', amount: '+10,000.00' },
  ];

  return (
    <div className=" rounded-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Transactions</h2>
        <button onClick={()=>navigate("/page-transcations")} className="text-green-500 hover:text-green-600 text-2xl ">→</button>
      </div>
      <div className="space-y-4">
        {transactions.map((transaction, index) => (
          <div key={index} className="flex justify-between items-center">
            <div>
              <p className="text-sm  font-semibold">{transaction.name}</p>
              <p className="text-sm text-gray-500">{transaction.date}</p>
            </div>
            <p className={`text-xl  ${transaction.amount.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
              {transaction.amount}
            </p>


          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionsList;