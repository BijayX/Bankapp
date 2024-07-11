import React from 'react';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import FAQ from './Faqs/FAQ';
import Footer from '../components/Footer/Footer';

const LandingPages: React.FC = () => {
    return (
        <>
            <div className=' bg-green-50'>
                <Header />
                <HeroBanner />
                <FAQ/>
                <Footer/>
            </div>
        </>
    );
}

export default LandingPages;
