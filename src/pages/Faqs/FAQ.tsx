import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do I sign up for an account with Reen Bank?",
    answer: "To sign up for an account, please visit our website or nearest branch."
  },
  {
    question: "What types of accounts does Reen Bank offer?",
    answer: "Reen Bank offers various account types including checking, savings, and investment accounts."
  },
  {
    question: "Is Reen Bank FDIC insured?",
    answer: "Yes, Reen Bank is FDIC insured, which means that your deposits are insured up to $250,000 per depositor, per insured bank, for each account ownership category."
  },
  {
    question: "How can I access my Reen Bank account online?",
    answer: "You can access your Reen Bank account online by logging into our secure online banking platform using your username and password. From there, you can view your account balances, transfer funds, pay bills, and more."
  },
  {
    question: "What security measures does Reen Bank have in place to protect my financial information?",
    answer: "We employ state-of-the-art encryption and multi-factor authentication to protect your data."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="bg-emerald-50 p-8 relative overflow-hidden py-14 px-20">
      <h2 className="text-3xl font-bold mb-6">FAQs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        <div>
          <h3 className="text-xl font-bold text-emerald-600 mb-4 underline">{faqs[activeIndex].question}</h3>
          <p className="text-gray-600 font-medium">{faqs[activeIndex].answer}</p>
        </div>
        <div>
          {faqs.map((faq, index) => (
            index !== activeIndex && (
              <div key={index} className="mb-4">
                <button
                  className="text-left w-full flex justify-between items-center text-[#46237A] hover:text-indigo-900"
                  onClick={() => setActiveIndex(index)}
                >
                  <span className="underline font-medium">{faq.question}</span>
                  <span className="text-xl">→</span>
                </button>
              </div>
            )
          ))}
        </div>
      </div>
      <div className="absolute right-[5%] top-[-40%] text-emerald-100 text-[400px] font-bold z-0 pointer-events-none">
        ?
      </div>
    </div>
  );
};

export default FAQ;
