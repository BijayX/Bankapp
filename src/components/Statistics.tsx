import React from 'react';

const Statistics: React.FC = () => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Statistics</h2>
        <label htmlFor="time-period" className="sr-only">Select time period</label>
        <select id="time-period" className="bg-gray-100 rounded-md py-1 px-2">
          <option>This Month</option>
          <option>Last Month</option>
          <option>This Year</option>
        </select>
      </div>
      <div className="space-y-4">
        <div className="flex items-center">
          <div className="w-1/4">Income</div>
          <div className="w-1/2 bg-green-200 rounded-full h-4">
            <div className="bg-green-500 h-4 rounded-full" ></div>
          </div>
          <div className="w-1/4 text-right">₦ 54,500.00</div>
        </div>
        <div className="flex items-center">
          <div className="w-1/4">Expense</div>
          <div className="w-1/2 bg-red-200 rounded-full h-4">
            <div className="bg-red-500 h-4 rounded-full"></div>
          </div>
          <div className="w-1/4 text-right">₦ 10,000.00</div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
