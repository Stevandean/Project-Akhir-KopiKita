import React from 'react';

const Makanan = () => {
  return (
    <div name='makanan' className='w-full text-white my-24'>
      <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>

      <div className='max-w-[1240px] mx-auto py-12'>

        <div className='text-center py-8 text-slate-300'>
          <h2 className='text-5xl font-bold text-white uppercase'>Makanan</h2>
          <h3 className='text-3xl py-8 text-white'>The best taste for you.</h3>
          <p className='text-3xl'> </p>
        </div>

        <div className='grid md:grid-cols-3'>

          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-lg'>Premium💎</span>
            <div>
              <p className='text-4xl font-bold py-4 flex'>#1<span className='text-3xl text-black flex flex-col justify-end'>-V60  </span></p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <div className='text-2xl'>
              <img src="v60.jpg" className='w-55 h-52' alt="v60" />
                <p className='flex py-4'></p>
                <p className='flex py-4'>Harga : </p>
                <button className='w-full py-4 my-4'>Pesan Sekarang</button>
            </div>
          </div>
          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-lg'>Populer❤️</span>
            <div>
              <p className='text-4xl font-bold py-4 flex'>#2<span className='text-3xl text-black flex flex-col justify-end'>-Taro Milk Tea</span></p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <div className='text-2xl'>
              <img src="taro.jpg" className='w-55 h-52' alt="taro"/>
                <p className='flex py-4'></p>
                <p className='flex py-4'>Harga : </p>
                <button className='w-full py-4 my-4'>Pesan Sekarang</button>
            </div>
          </div>
          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-lg'>Hot🔥</span>
            <div>
              <p className='text-4xl font-bold py-4 flex'>#3<span className='text-3xl text-black flex flex-col justify-end'>-Latte</span></p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <div className='text-2xl'>
              <img src='latte2.jpg' className='w-55 h-52' alt="latte" />
                <p className='flex py-4'></p>
                <p className='flex py-4'>Harga : </p>
                <button className='w-full py-4 my-4'>Pesan Sekarang</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Makanan;