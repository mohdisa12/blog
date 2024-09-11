import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
  const posts = [
      {
        id: 1,
         title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
         img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
       },
       {
        id: 1,
         title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
         img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
       }
    ]
  return (
    <>
    <div className='bg-gray-100  min-h-screen flex justify-center items-center'>
      <div className='w-full max-w-3xl  flex flex-col gap-6 items-center'>
        {posts.map((post)=>(
          <div className='flex justify-between gap-10 p-4' key={post.id}>
            <div className='w-[45vw] h-full pt-2'>
                <img className=" w-full h-full object-cover rounded-md shadow-[0_35px_60px_15px_rgba(20,0,30,0.3)]"  src={post.img} />
            </div>
            <div className="text-black flex flex-col gap-1 ">
              <Link className="text-3xl pb-4 font-bold" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p className='text-xl leading-tight'>{post.desc}</p>
              <Link to={`/post/${post.id}`}>
              <button className='text-xl text-bold text-customColor rounded-md text-start p-1 border border-customColor'>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
  )
}

export default Home