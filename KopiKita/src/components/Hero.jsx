import React from 'react'
import bgImg from '../assets/coffee.png'

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                {/* <h1 className='py-3 text-5xl md:text-7xl font-bold'>Kopi Kita</h1> */}
                <h1 className='py-1 font-bold text-6            <h1 className='text-3xl font-bold ml-80 mr-10 sm:text-4xl'></h1>
xl'>Kopi Kita</h1>
                <p className='deskripsihome'>Dari Aku, Kopi dan Kamu menjadi Kita</p>
                <button className='py-2 px-6 sm:w-[60%] my-1'>Pesan Sekarang</button>
            </div>
            <div>
                <img className='px-4' src={bgImg} alt="/" />
            </div>
            {/* <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>
                <p>Data Services</p>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-slate-500'><CloudUploadIcon className='h-6 text-indigo-600' /> App Security</p>
                    <p className='flex px-4 py-2 text-slate-500'><DatabaseIcon className='h-6 text-indigo-600' /> Dashboard Design</p>
                    <p className='flex px-4 py-2 text-slate-500'><ServerIcon className='h-6 text-indigo-600' /> Cloud Data</p>
                    <p className='flex px-4 py-2 text-slate-500'><PaperAirplaneIcon className='h-6 text-indigo-600' /> API</p>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default Hero