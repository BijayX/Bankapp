import React from 'react';
import AccountCard from '../../components/Card/AccountCard';
import Transactions from '../../components/Transcations';

const Account: React.FC = () => {
  const [showBalance, setShowBalance] = React.useState(true);

  const toggleShowBalance = () => {
    setShowBalance(!showBalance);
  };

  return (
    <div className="p-2 bg-[#f5fcf9] ">
      <div className="grid grid-cols-4 gap-6">
        <AccountCard title="Main Account" balance="₦ 44,500.00" showBalance={showBalance} toggleShowBalance={toggleShowBalance} />
        <AccountCard title="School Savings" balance="₦ 44,500.00" showBalance={showBalance} toggleShowBalance={toggleShowBalance} />
        <AccountCard title="Holiday Plan" balance="₦ 44,500.00" showBalance={showBalance} toggleShowBalance={toggleShowBalance} />
        <AccountCard  title="Add Account" balance="" showBalance={false} toggleShowBalance={() => {}} isNew={true} />
        </div>
      <div className="mt-16">
        <Transactions />
      </div>
    </div>
  );
};

export default Account;
