import React from 'react'
import bgImg from '../assets/coffee.png'

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                {/* <h1 className='py-3 text-5xl md:text-7xl font-bold'>Kopi Kita</h1> */}
                <h1 className='py-1 font-bold text-6xl'>Kopi Kita</h1>
                <p className='deskripsihome'>Dari Aku, Kopi dan Kamu menjadi Kita</p>
                <button className='py-2 px-6 sm:w-[60%] my-1'>Pesan Sekarang</button>
            </div>
            <div>
                <img className='px-4' src={bgImg} alt="/" />
            </div>
        </div>
    </div>
  )
}

export default Hero