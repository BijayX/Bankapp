import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import AccountOverview from '../../components/AccountOverview';
import AccountsLists from '../../components/AccountLists';
import Statistics from '../../components/Statistics';
import TransactionsList from '../../components/TransactionsList';
import UpgradeToPro from '../../components/UpgradeToPro';
import Sidebar from '../../components/Siderbar/Siderbar';

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen px-10 ">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto  p-6">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <AccountOverview />
              <AccountsLists />
              <Statistics />
            </div>
            <div className="col-span-1">
              <TransactionsList />
              <UpgradeToPro />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;