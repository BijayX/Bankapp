import React from 'react';

interface ButtonProps {
    onClick?: () => void; 
    children: React.ReactNode; 
    className?: string; 
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 border-2  border-[#33B786] text-[#33B786] rounded hover:bg-[#288F69] hover:text-white ${className}`}
        >
            {children}
        </button>
    );
}

export default Button;
