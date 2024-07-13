import React from 'react';
import profilePic from '../../assets/logo.png'; // Replace with the correct path to the profile picture

const ProfileSection: React.FC = () => {
  return (
    <div className="profile-section p-4 bg-white rounded-lg shadow-md">
      <div className="text-center">
        <img src={profilePic} alt="Profile" className="w-24 h-24 rounded-full mx-auto mb-4" />
        <h2 className="text-2xl font-semibold">Maureen Oguche</h2>
        <span className="bg-purple-200 text-purple-700 text-sm px-2 py-1 rounded-full">Pro User</span>
      </div>
      <div className="mt-4">
        <div className="mb-2">
          <span className="text-gray-500">Email</span>
          <p className="text-lg">oguchemaureen@gmail.com</p>
        </div>
        <div className="mb-2">
          <span className="text-gray-500">Phone Number</span>
          <p className="text-lg">+234 803 041 1314</p>
        </div>
        <div className="mb-2">
          <span className="text-gray-500">Gender</span>
          <p className="text-lg">Female</p>
        </div>
        <button className="w-full bg-green-500 text-white py-2 rounded-md">Reset Password</button>
      </div>
    </div>
  );
};

export default ProfileSection;
