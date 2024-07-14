import React from 'react';
import AccountCard from '../../components/Card/AccountCard';
import Transactions from '../../components/Transcations';


const TransactionsPage: React.FC = () => {
  const [showBalance, setShowBalance] = React.useState(true);

  const toggleShowBalance = () => {
    setShowBalance(!showBalance);
  };

  return (
    <div className="bg-[#f5fcf9] p-2">
      <div className="grid grid-cols-3 gap-4.5">
        <AccountCard title="Main Account" balance="₦ 44,500.00" showBalance={showBalance} toggleShowBalance={toggleShowBalance} hideButtons />
        <AccountCard title="School Savings" balance="₦ 44,500.00" showBalance={showBalance} toggleShowBalance={toggleShowBalance} hideButtons />
        <AccountCard title="Holiday Plan" balance="₦ 44,500.00" showBalance={showBalance} toggleShowBalance={toggleShowBalance} hideButtons />
      </div>
      <div className="mt-24">
        <Transactions showHeader={false} />
      </div>
    </div>
  );
};

export default TransactionsPage;
