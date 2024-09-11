import React from 'react';
import { Link } from 'react-router-dom';

function Single() {
  return (
    <>
    <div className='min-h-screen flex justify-center'>
      <div className='w-full max-w-[60vw] flex justify-between gap-6 pt-6'>
        <div className='flex-[2] h-full'>
           <div className='flex flex-col min-h-screen'>
            <div className='w-full h-[30vh]'>
              <img className='w-full h-full object-cover' src='https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
            </div>
            <div className='flex items-center gap-6'>
              <div className='text-xl'>
                <span className='font-semibold'>Isa</span>
                <p>Posted 2 hours a go</p>
              </div>
              <div className='flex gap-2'>
                <Link to='add/?edit=id'>
                <button className='border border-red-100 p-1'>Edit</button>
                </Link>
                <button className='border border-red-100 p-1'>Delete</button>
            
              </div>
            </div>
            
            <div className=''>
            <p className='text-xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
            <p className='text-md'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!
            </p>
           </div>
        </div>
        <div className='flex-1 h-full border-1 border-red-600'>
           <h1>W</h1>
        </div>
      </div>
    
    </div>
    </>
  )
}

export default Single;