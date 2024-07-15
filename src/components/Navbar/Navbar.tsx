import React from 'react';
import { BiSearch, BiBell } from 'react-icons/bi';
import profile from '../../assets/Ellipse.png'

const Navbar: React.FC = () => {
    return (
        <header className="bg-bgcolor">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-5 mr-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="font-bold text-3xl">Overview</span>
                    </div>
                    <div className="flex items-center">
                        <div className="mr-16 text-right">
                            <span className="block font-medium text-bg-gcolor">Maureen Oguche</span>
                            <span className="block text-3xl font-semibold">1234567890</span>
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search"
                                className="bg-gray-100 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <BiSearch className="absolute left-3 top-3 text-gray-400" />
                        </div>
                        <button
                            className="ml-4 p-2 rounded-full text-black text-lg "
                            aria-label="Notifications"
                        >
                            <BiBell className="text-gray-600" />
                        </button>
                        <img
                            src={profile}
                            alt="User Avatar"
                            className="ml-4 h-8 w-8 rounded-full"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
