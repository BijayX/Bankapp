import React, { useRef, useState, useEffect, KeyboardEvent, ChangeEvent } from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

import logo from '../../../assets/logo.png'

const EmailVerification: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string): void => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = (): void => {
    const otpString = otp.join('');
    console.log('Verifying OTP:', otpString);
  };


  return (
    <div className="min-h-screen flex items-center justify-between register-container bg-[#D4F3E7]">
      <div className="flex flex-col justify-center w-1/2 p-16">
        <div className="mb-8">
          <div className="flex items-center mb-8">
            <div>
              <img src={logo} alt="Reen Bank" className="w-30 h-10" />
            </div>
          </div>
          <div className='px-1 py-10'>
            <h2 className='font-medium text-2xl text-bg-gcolor'>Reen Bank</h2>
            <h2 className="text-5xl font-semibold mb-4">
              <span className="block">Experience</span>
              <span className="block">hassle-free banking</span>
            </h2>
            <p className="text-[#555555] mb-8">Experience simple, secure, and stress-free banking. Say goodbye to long queues and complex procedures and hello to hassle-free banking with Reen Bank.</p>            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-emerald-500 hover:bg-[#45a480] rounded-full flex items-center justify-center" aria-label="Facebook" title="Facebook">
                <FaFacebookF className="text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-emerald-500 hover:bg-[#45a480] rounded-full flex items-center justify-center" aria-label="Twitter" title="Twitter">
                <FaXTwitter className="text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-emerald-500 hover:bg-[#45a480] rounded-full flex items-center justify-center" aria-label="Instagram" title="Instagram">
                <FaInstagram className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-2xl p-8 w-1/3 m-16">
        <h2 className="text-2xl font-bold mb-6 text-emerald-500">Email Verification</h2>
        <p className="mb-6 font-medium text-[#B8B8B8] text-sm">A 6-digit code has been sent to your email u****me@gmail.com <a href="#" className="text-bg-gcolor">Change</a></p>
        <div className="flex justify-between mb-6">
          {otp.map((digit, index) => (
            <div key={index} className="flex flex-col items-center">
              <label htmlFor={`otp-${index}`} className="sr-only">
                Digit {index + 1}
              </label>
              <input
                id={`otp-${index}`}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength={1}
                className="w-12 h-12 border-2 border-[#8A8A8A]  rounded-xl text-center text-xl focus:outline-green-700 focus:ring-0"
                value={digit}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(index, e.target.value)}
                onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleKeyDown(index, e)}
                aria-label={`Digit ${index + 1}`}
                title={`Enter digit ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <p className="text-sm font-medium text-bg-gcolor mb-6">0:45 remaining</p>
        <button
          onClick={handleVerify}
          className="w-full bg-bg-gcolor text-white py-2 rounded-md hover:bg-[#288F69] transition duration-200"
        >
          verify Email
        </button>
        <p className="text-sm mt-4 text-[#B8B8B8]">
          Didn't receive the code? <a href="#" className="text-bg-gcolor">Resend</a>
        </p>
      </div>
    </div>


  );
}

export default EmailVerification;
