import React from 'react';

interface MonthSelectorProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  currentMonth: string;
  years?: number[];
}

const MonthSelector: React.FC<MonthSelectorProps> = ({ onChange, currentMonth }) => {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];


  return (
    <select
      id="time-period"
      className="bg-gray-100 rounded-md focus:outline-none py-1 px-2"
      onChange={onChange}
      value={currentMonth}
      aria-label="Select time period"
    >
      <option>This Month</option>
      {months.map((month, index) => (
        <option key={index} value={month}>{month}</option>
      ))}
      
    </select>
  );
};

export default MonthSelector;
