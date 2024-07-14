import React, { useRef, useState, useEffect, KeyboardEvent, ChangeEvent } from 'react';

const OTPModal: React.FC = () => {
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
    <div className="min-h-screen flex items-center justify-center bg-[#D4F3E7]">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full px-12 max-w-md mx-4">
        <h2 className="text-2xl font-bold mb-6 text-emerald-500 ">Enter Otp</h2>
        <p className="mb-6 font-medium text-[#B8B8B8]  text-sm">
          A 6-digit code has been sent to your email u****me@gmail.com{' '}
          <a href="#" className="text-bg-gcolor">Change</a>
        </p>
        <div className="flex justify-center space-x-3  mb-6">
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
                className="w-12 h-12 border-2 border-[#8A8A8A] rounded-xl text-center text-xl focus:outline-green-700 focus:ring-0"
                value={digit}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(index, e.target.value)}
                onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleKeyDown(index, e)}
                aria-label={`Digit ${index + 1}`}
                title={`Enter digit ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <p className="text-sm font-medium text-bg-gcolor text-left mb-6">0:45 remaining</p>
        <button
          onClick={handleVerify}
          className="w-full bg-bg-gcolor text-white py-2 rounded-md hover:bg-[#288F69] transition duration-200"
        >
          Verify Email
        </button>
        <p className="text-sm mt-4 text-[#B8B8B8] text-center">
          Didn't receive the code? <a href="#" className="text-bg-gcolor">Resend</a>
        </p>
      </div>
    </div>
  );
};

export default OTPModal;
