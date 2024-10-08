import React from 'react';
import logo from '../../src/assets/images/logo.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className=' flex items-center gap-2 text-white'>
                <img src={logo} alt="" />
                <p className='text-[34px]'>CodeLearn</p>
            </div>
            <div className='flex gap-4'>
                <p className='text-[#EAE34A]'>Home</p>
                <p className='text-white'>Course</p>
                <p className='text-white'>About us</p>
                <p className='text-white'>Pricing</p>
                <p className='text-white'>Contact</p>
            </div>
            <div className='flex gap-5'>
                <button className='bg-[#EAE34A] w-[93px] h-[48px] px-5 py-3 rounded '>Log in</button>
                <button className='text-white'>Sign up</button>
            </div>
        </div>
    );
};

export default Navbar;