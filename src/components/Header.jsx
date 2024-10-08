import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';

const Header = () => {
    return (
        <div className='py-2 width-control-container h-[860px] bg-gradient-to-r from-[#160A3A] to-[#241846]'>
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Header;