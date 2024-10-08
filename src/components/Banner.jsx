import React from 'react';
import check from '../assets/images/check-mark.png';
import playimg from '../assets/images/play.png';
import star from '../assets/images/star.png';
import personOne from '../assets/images/person-1.png';
import personTwo from '../assets/images/person-2.png';
import female from '../assets/images/female.png';

const Banner = () => {
    return (
        <div className='mt-[100px] flex justify-between'>
           <div>
               <p className='py-[6px] px-[24px] rounded w-[220px] flex gap-2 bg-gradient-to-r from-[#241457] to-[#4F2BBD]'>
                 <img src={check} alt="" />
                 <span className='text-[14px] text-white'>Verified by Coursera</span>
               </p>
               <div className='mt-10 leading-[84.72px] text-white text-[70px]'>
                 <h1>
                    Learn Code
                      <br/> 
                    From top Coder
                 </h1>
                 <p className='text-[20px] leading-[30px] mt-[30px]'>
                   It is a long established fact that a reader will be distracted <br/> by the readable content of a page when looking at its layout. <br/> The point of using
                 </p>
               </div>
               <div>
                 <p className='flex gap-3 items-center mt-[36px] '>
                    <button className='bg-[#EAE34A] py-3 px-5'>Get Started</button>
                    <button className='flex text-white bg-[#291B52] py-3 px-5 w-[198px]'>
                       <img src={playimg} alt="" />
                       <span>How its Works</span>
                    </button>
                 </p>
                 <div className='flex gap-9 mt-10'>
                    <div className='flex gap-1'>
                        <img src={star} alt="star" srcset="" />
                        <img src={star} alt="star" srcset="" />
                        <img src={star} alt="star" srcset="" />
                        <img src={star} alt="star" srcset="" />
                        <img src={star} alt="star" srcset="" />
                    </div>
                    <p className='text-white'>Based on 10,000+ reviews on</p>
                 </div>
               </div>
           </div>

           <div className='flex items-center gap-8'>
               <div className="flex flex-col justify-between items-center rounded-t-[99.5px] rounded-b-[99.5px] w-[160px] h-[459px] bg-gradient-to-b from-[#98FDE3] to-[#3E3761]">  
                    <div className='my-[64px] px-[12px] text-center'>
                        <p className='text-center font-bold text-[22px]'>Zillo-monlel</p>
                        <span className='text-center font-semibold'>Data Engineer</span>
                    </div>
                    <div>
                        <img className='rounded-b-[99.5px]' src={personOne} alt="" />
                    </div>
               </div>
               <div className="mt-40 rounded-[99.5px] w-[160px] h-[459px] bg-gradient-to-b from-[#241846] to-[#9506FF]">
                    <div className='my-[64px] px-[12px] text-center text-white'>
                        <p className='text-center font-bold text-[22px]'>Luci Gurg</p>
                        <span className='text-center font-semibold'>Soft. Engineer</span>
                    </div>
                    <div>
                        <img className='rounded-b-[99.5px]' src={female} alt="" />
                    </div>
               </div>
               <div className="mb-20 rounded-[99.5px] w-[160px] h-[459px] bg-gradient-to-b from-[#3b93ca] to-[#3cadc6]">
                    <div className='my-[64px] px-[12px] text-center'>
                        <p className='text-center font-bold text-[22px]'>Tom Latham</p>
                        <span className='text-center font-semibold'>SQA. Engineer</span>
                    </div>
                    <div>
                        <img className='rounded-b-[99.5px]' src={personTwo} alt="" />
                    </div>
               </div>
           </div> 
        </div>
    );
};

export default Banner;