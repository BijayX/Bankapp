import React from 'react';
import './Service.css'
import savings from '../../assets/savings-1.svg'
import loans from '../../assets/personal-1.svg'
import money from '../../assets/money-1.svg'
import deal from '../../assets/deal-1.svg'
import bill from '../../assets/bill-1.svg'
import card from '../../assets/credit-card-1.svg'

interface ServiceItem {
  icon: any;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    icon: <img src={savings} alt="Savings Icon" className="service-icon" />,
    title: 'Savings accounts',
    description: 'Reen Bank could offer a variety of savings accounts with different interest rates and terms, allowing customers to save money and earn interest over time. These accounts could include features like automatic transfers, overdraft protection, and mobile banking access.'
  },
  {
    icon: <img src={loans} alt="Savings Icon" className="service-icon" />,
    title: 'Personal loans',
    description: 'Reen Bank could offer personal loans for a variety of purposes, such as debt consolidation, home improvements, or major purchases. Customers could apply online and receive a decision quickly, with flexible repayment terms and competitive interest rates.'
  },
  {
    icon: <img src={card} alt="Savings Icon" className="service-icon" />,
    title: 'Credit cards',
    description: 'Reen Bank could offer credit cards with different rewards programs and benefits, such as cash back, travel rewards, or low interest rates. Customers could manage their cards online and receive alerts for suspicious activity or due dates.'
  },
  {
    icon: <img src={money} alt="Savings Icon" className="service-icon" />,

    title: 'Investment services',
    description: 'Reen Bank could offer investment services for customers looking to grow their wealth over time. These services could include mutual funds, exchange-traded funds, and other investment vehicles, with access to professional financial advice and analysis.'
  },
  {
    icon: <img src={bill} alt="Savings Icon" className="service-icon" />,
    title: 'Online bill pay',
    description: 'Reen Bank could offer a convenient online bill pay service, allowing customers to pay bills and manage expenses from their computer or mobile device. This service could include features like automatic payments, bill reminders, and customizable payment schedules.'
  },
  {
    icon: <img src={deal} alt="Savings Icon" className="service-icon"/>,
    title: 'Business banking',
    description: 'Reen Bank could offer a range of banking services for small and medium-sized businesses, including checking accounts, business loans, merchant services, and cash management tools. These services could help businesses streamline their financial operations and grow their operations over time.'
  }
];

const Service: React.FC = () => {
  return (
    <div className="bg-gray-100 p-8 py-5 px-20">
      <h2 className="text-3xl font-bold mb-8">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex">
            <div className="flex-shrink-0 mr-4">
              <span className="text-3xl">{service.icon}</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-emerald-600 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;