import React from 'react';
import { FaCheck, FaTimes, FaInfo } from 'react-icons/fa';

interface ToastProps {
    type: 'success' | 'error' | 'info';
    message: string;
    buttonText?: string;
    onButtonClick?: () => void;
}

const Toast: React.FC<ToastProps> = ({ type, message, buttonText, onButtonClick }) => {
    const getIcon = () => {
        switch (type) {
            case 'success':
                return <FaCheck className="text-white text-4xl" />;
            case 'error':
                return <FaTimes className="text-white text-4xl" />;
            case 'info':
                return <FaInfo className="text-white text-4xl" />;
            default:
                return null;
        }
    };

    const getBackgroundColor = () => {
        switch (type) {
            case 'success':
                return 'bg-bg-gcolor';
            case 'error':
                return 'bg-red-500';
            case 'info':
                return 'bg-blue-500';
            default:
                return 'bg-gray-500';
        }
    };
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white rounded-2xl shadow-lg p-8 w-96 text-center">
            <div className={`mx-auto w-20 h-20 rounded-full flex items-center justify-center ${getBackgroundColor()} mb-6`}>
                {getIcon()}
            </div>
            <h2 className="text-2xl font-semibold mb-6">{message}</h2>
            {type !== 'error' && buttonText && onButtonClick && (
                <button
                    onClick={onButtonClick}
                    className={`w-full ${getBackgroundColor()} text-white py-2 rounded-md hover:bg-[#288F69] transition duration-200`}
                >
                    {buttonText}
                </button>
            )}
        </div>
        </div>
    );
};

export default Toast;
