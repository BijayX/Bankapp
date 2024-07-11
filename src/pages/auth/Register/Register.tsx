import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SlLock } from "react-icons/sl";
import { BiUser } from "react-icons/bi";

import logo from '../../../assets/logo.png'
import Input from '../../../components/Input/Input';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const navigate = useNavigate()
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
            <h2 className="text-5xl font-bold mb-4">
              <span className="block mb-3">Experience</span>
              <span className="block mb-8">hassle-free banking</span>
            </h2>
            <p className="text-[#555555] mb-8">Experience simple, secure, and stress-free banking. Say goodbye to long queues and complex procedures and hello to hassle-free banking with Reen Bank.</p>
            <div className="flex space-x-4">
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
        <h1 className="text-3xl font-bold mb-4 text-bg-gcolor">Register</h1>
        <form>
          <Input
            id="name"
            label="Name"
            type="text"
            placeholder="Enter name here"
            icon={BiUser} 
          />
          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="Enter your Email"
            icon={HiOutlineMail} 
          />
          <Input
            id="password"
            label="Password"
            type="password"
            placeholder="Enter your Password"
            icon={SlLock} 
          />
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox w-4 h-4 text-[#8A8A8A]" />
              <span className="ml-2 text-[#B8B8B8]">I agree to all the <a href="#" className="text-bg-gcolor">Terms, Privacy Policy</a> and <a href="#" className="text-bg-gcolor">Fees</a>.</span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-bg-gcolor text-white py-2 rounded-md hover:bg-[#288F69] transition duration-200"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-[#B8B8B8]">
          Already have an Account? <a onClick={()=>navigate("/auth/login")} className="text-bg-gcolor">Log in.</a>
        </div>
      </div>
    </div>
  );
}

export default Register;
