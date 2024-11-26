import React from 'react';
import { assets } from '../assets/assets';

const Try = () => {
  return (
<div className='flex flex-col items-center justify-center my-20 py-12'>
<button className='sm:text-lg text-white   bg-black w-auto mt-8 px-12 py-2.5 flex  items-center gap-2  rounded-full    ' >Generate Images <img  className='h-6' src={assets.star_group} alt="start"/>
      </button> 
    </div>
  );
}

export default Try;
