import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaFacebookF } from "react-icons/fa";




const Footer: React.FC = () => {
  return (
    <footer className="flex bg-emerald-50 ">
      <div className="w-1/2 p-12 flex flex-col justify-between">
        <div className="flex py-5 px-8">

          <div className="w-1/2">
            <h3 className="text-emerald-500 font-semibold mb-4">HELP</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#">Help Center</a> </li>
              <li><a href="#"> Contact Us</a></li>
              <li><a href="#">How to Use</a></li>
            </ul>
          </div>
          <div className="w-1/2">
            <h3 className="text-emerald-500 font-semibold mb-4">ABOUT</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#">About Reem Bank</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-4 px-8 py-5">
            <img src={logo} alt="Reen Bank Logo" className="w-36 h-auto" />
          </div>
          <p className="text-gray-500 text-sm mb-4 px-8 ">2024 ReenBank. All rights reserved!</p>
          <div className="flex space-x-4 px-8">
            <div className="w-8 h-8 bg-emerald-500 hover:bg-[#45a480] rounded-full flex items-center justify-center">
              <FaFacebookF className="text-white" />
            </div>

            <div className="w-8 h-8 bg-emerald-500 hover:bg-[#45a480]  rounded-full flex items-center justify-center">
              <FaXTwitter className="text-white" />
            </div>
            <div className="w-8 h-8 bg-emerald-500 hover:bg-[#45a480]  rounded-full flex items-center justify-center">
              <FaInstagram className="text-white" />
            </div>
          </div>

        </div>
      </div>
      <div className="w-1/2 footer-bg-image relative rounded-tl-6xl overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-12">
          <div className="text-white max-w-md">
            <p className="mb-2">New to Reem Bank?</p>
            <h2 className="text-4xl font-bold mb-6">Enter your Email and Get Started Now</h2>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your Email"
                className="flex-grow bg-transparent border-2 border-red-500 rounded-lg px-4 py-2 focus:ring-green-700 text-white placeholder-white"
              />
              <button className="bg-emerald-500 text-white px-6 py-1 rounded-lg">Get Started</button>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;