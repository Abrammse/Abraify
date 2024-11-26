import React from 'react';
import { stepsData } from '../assets/assets';

const Steps = () => {
  return (
    <div className='flex flex-col items-center justify-center my-32'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2 '>How it works</h1>
      <p className=' tet-lg mb-8 text-gray-600'> Transform Words Into Stunning Images </p>


      <div className='space-y-4 w-full max-w-3xl text-sm '>
        {stepsData.map((item,index)=>(
            <div key={index}  className='flex item-center gap-4 px-8 p-5 bg-white/20 shadow-md borer cursor-pointer hover:scale-[1.02]' >
                <img src={item.icon} alt="" />
            <div>
                <h2> {item.title}</h2>
                <h2> {item.description}</h2>

            </div>
            </div>
        ))}
      </div>

      </div>
  );
}

export default Steps;
