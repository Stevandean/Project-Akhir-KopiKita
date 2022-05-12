import React from 'react';

import {ArrowSmRightIcon } from '@heroicons/react/outline';
import {RiNumber1, RiNumber2, RiNumber3} from 'react-icons/ri'

import bgImg from '../assets/bg.jpg'

const Promo = () => {
  return (
  <div name='promo' className='w-full mt-24'>
      <div className='w-full h-[700px] bg-gray-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={bgImg} alt="/" />
      </div>
      
      <div className='max-w-[1240px] mx-auto text-white relative'>
          <div className='px-4 py-12'>
              <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Promo</h2>
              <h3 className='text-5xl font-bold py-6 text-center'>Finding the Best Price</h3>
              {/* <p className='py-4 text-3xl text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repudiandae veritatis ratione error tenetur, voluptates architecto possimus ad! Omnis minima ea quidem quisquam unde beatae, minus illo et cum vel?</p> */}
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <RiNumber1 className='w-16 h-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-5'>Croissant</h3>
                      <img src='croissant.jpg'></img>
                      {/* <p className='text-gray-600 text-xl'>Croissant adalah sejenis kue kering yang berasal dari Prancis. Biasanya berisikan coklat, daging, dan sebagainya.</p> */}
                      <p className='text-gray-3000 text-2xl mt-5'>Harga :</p>
                  </div>
                  <div className='bg-slate-100 pl-8 pt-3 pb-3 mb-4'>
                      <p className='flex items-center text-indigo-600'>Pesan<ArrowSmRightIcon className='w-5 ml-2' /></p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                    <RiNumber2 className='w-16 h-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-5'>Espresso</h3>
                      <img src='espresso.jpg' className='w-55 h-52'></img>
                      <p className='text-gray-3000 text-2xl mt-5'>Harga :</p>
                      </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-indigo-600'>Pesan<ArrowSmRightIcon className='w-5 ml-2' /></p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                    <RiNumber3 className='w-16 h-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-5'>Latte</h3>
                      <img src='latte2.jpg' className='w-55 h-52'></img>
                      <p className='text-gray-3000 text-2xl mt-5'>Harga :</p>

                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-indigo-600'>Pesan<ArrowSmRightIcon className='w-5 ml-2' /></p>
                  </div>
              </div>
          </div>
      </div>
  </div>
  );
};

export default Promo;
