import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/logo.png';

function Header() {
  return (
    <nav>
    <div className='w-full bg-white'>
      <div className='flex justify-between items-center py-2 px-4'>
        <img className='w-32' src={Logo} alt='' />
        <div className='flex justify-around gap-4 font-sans text-2xl '>
          <Link to='/?cat=art' className='hover:text-customColor'>Art</Link>
          <Link to='/?cat=science' className='hover:text-customColor'>Science</Link>
          <Link to='/?cat=technology' className='hover:text-customColor'>Technology</Link>
          <Link to='/?cat=cinema' className='hover:text-customColor'>Cinema</Link>
          <Link to='/?cat=design' className='hover:text-customColor'>Design</Link>
          <Link to='/?cat=art' className='hover:text-customColor'>Food</Link>
          <Link to='/login' className='hover:text-customColor font-semibold'>Login</Link>
          <span>
            <Link to='/add' className='hover:bg-customColor hover:rounded-full py-4 px-3'>Add</Link>
          </span>
          
        </div>
      </div>
    </div>
    </nav>
  )
}

export default Header;