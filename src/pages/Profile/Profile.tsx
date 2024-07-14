import React from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import profile from '../../assets/Ellipse.png';
import TransactionsList from '../../components/TransactionsList';
import ResetPassword from '../auth/ResetPassword';

const UserProfile: React.FC = () => {
  const [showBalance, setShowBalance] = React.useState(true);
  const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      // Handle file upload logic here
      console.log(file);
    }
  };

  const toggleResetPasswordModal = () => {
    setIsResetPasswordModalOpen(!isResetPasswordModalOpen);
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-6 bg-[#f5fcf9]">
        <div className="col-span-2">
          <div className="bg-white max-w-3xl rounded-lg p-8 ">
            <div className="relative flex flex-col items-center mb-6">
              <img
                src={profile}
                alt="Maureen Oguche"
                className="w-32 h-32 rounded-full mb-4 object-cover cursor-pointer"
                onClick={handleImageClick}
              />
              <input
                id="file-upload"
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
                title="Upload profile picture"
              />
              <h2 className="text-3xl font-bold">Maureen Oguche</h2>
              <span className="bg-purple-200 text-purple-700 px-4 py-2 rounded-full text-sm mt-2">
                Pro User
              </span>
            </div>
            <div className="space-y-6 px-44">
              <div>
                <p className="text-sm font-medium text-bg-gcolor">Email</p>
                <p className="text-xl font-bold">oguchemaureenm@gmail.com</p>
              </div>
              <hr className="border-t-2 border-[#D9D9D9] my-4"/>
              <div>
                <p className="text-sm font-medium text-bg-gcolor">Phone Number</p>
                <p className="font-bold text-xl">+234 803 041 1314</p>
              </div>
              <hr className="border-t-2  border-[#D9D9D9] my-4"/> 
              <div>
                <p className="text-sm font-medium text-bg-gcolor">Gender</p>
                <p className="font-bold text-xl">Female</p>
              </div>

              <button 
                className="w-full mt-8 bg-bg-gcolor text-white py-3 rounded-md hover:bg-[#288F69] transition duration-300"
                onClick={toggleResetPasswordModal}
              >
                Reset Password
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="bg-[#D4F3E7] rounded-lg p-6 ml-6">
            <div className="flex justify-between items-center">
              <h3 className="text-blueis font-medium">Main Account</h3>
              <button onClick={() => setShowBalance(!showBalance)} className="text-gray-500">
                {showBalance ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <p className="text-3xl font-bold mt-2">
              {showBalance ? '₦ 44,500.00' : 'XXXXXXXX'}
            </p>
          </div>

          <div className="bg-white py-10">
            <TransactionsList />
          </div>
        </div>
      </div>

      {isResetPasswordModalOpen && <ResetPassword />}
    </>
  );
};

export default UserProfile;
