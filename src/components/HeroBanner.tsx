import React from 'react';
import Button from './Button/Button';
import Creditcard from './CreditCard';
import Service from './service/Service';

const HeroBanner: React.FC = () => {
    return (
        <>
            <main className="text-left py-5 px-20 flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="max-w-md">
                    <h3 className="text-xl font-medium text-[#33B786]">Reen Bank</h3>
                    <h2 className="text-5xl font-semibold mb-4">
                        <span className="block">Experience</span>
                        <span className="block">hassle-free banking</span>
                    </h2>
                    <p className="text-[#555555] mb-8">Experience simple, secure, and stress-free banking. Say goodbye to long queues and complex procedures and hello to hassle-free banking with Reen Bank.</p>
                    <div className="flex space-x-4">
                        <Button className="text-[#33B786] font-medium">Get Started</Button>
                        <Button className="text-[#33B786] font-medium flex items-center">
                            Learn More<span className="text-xl ml-1">→</span>
                        </Button>
                    </div>
                </div>
                <div className="md:ml-10">
                    <Creditcard />
                </div>
            </main>
            <Service />
        </>
    );
}

export default HeroBanner;
