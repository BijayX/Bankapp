import React from 'react';
import logo from '../assets/logo.png';
import Button from './Button/Button';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
    const navigate = useNavigate()
    return (
        <header className="w-full flex justify-between items-center px-20 py-5 bg-green-50">
            <div className="flex items-center space-x-20">
                <img src={logo} alt="Reen Bank Logo" className="w-36 h-auto" />
                <div className='flex space-x-9'>
                    <a href="#" className="text-lg">About</a>
                    <a href="#" className="text-lg">Contact Us</a>
                </div>
            </div>
            <div className="space-x-8 text-green-700">
                <Button onClick={()=>navigate("auth/login")} className="text-[#33B786]">Login</Button>
            </div>
        </header>
    );
}

export default Header;
