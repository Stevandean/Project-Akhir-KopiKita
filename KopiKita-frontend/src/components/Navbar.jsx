import React, {useState} from 'react';
import { Link, } from 'react-scroll'

// ERROR (TABRAKAN DENGAN REACT SCROLL)
// import { Route, Routes } from 'react-router-dom';
// import Makanan from '../pages/makanan';
// import Minuman from '../pages/minuman';

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleClose =()=> setNav(!nav)

  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='py-1 font-bold text-2xl px-4'>KOPIKITA</h1>
          <ul className='hidden md:flex'>
            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
            <li><Link to="promo" smooth={true} offset={-50} duration={500}>Promo</Link></li>
            <li><Link to="topmenu" smooth={true} offset={-50} duration={500}>Top Menu</Link></li>
            <li><Link to="makanan" smooth={true} offset={-50} duration={500}>Makanan</Link></li>
            <li><Link to="minuman" smooth={true} offset={-50} duration={500}>Minuman</Link></li>


            {/* <Link className='navbar-list mt-4 ml-4' to="/makanan">Makanan</Link>
            <Link className='navbar-list mt-4 ml-8' to="/minuman">Minuman</Link> */}

            <h1 className='text-3xl font-bold ml-80 '></h1>
            <h1 className='text-2xl ml-80 my-3 '>Keranjang</h1>

          </ul>
        </div>
      </div>

        {/* Error Blank Putih */}
      {/* <Routes>
        <Route exact path="/" component={Hero} /> 
        <Route path="/makanan" component={Hero<Makanan />}></Route>
        <Route path="/minuman" component={Hero<Minuman />}></Route>
      </Routes> */}


      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="topmenu" smooth={true} offset={-50} duration={500}>topmenu</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="makanan" smooth={true} offset={-50} duration={500}>Makanan</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="minuman" smooth={true} offset={-50} duration={500}>Minuman</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={500}>Keranjang</Link></li>

      </ul>
    </div>
  );
};

export default Navbar;