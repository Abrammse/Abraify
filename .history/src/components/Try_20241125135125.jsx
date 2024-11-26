import React from 'react';
import { assets } from '../assets/assets';

const Try = () => {
  return (
<div className='flex flex-col items-center justify-center my-20 py-12'>
<h1 className='text-2xl md:text-3xl lg:text-4xl  mt-4 font-semibold text-neutral-800 py-6 md:py-16 '>See the magic. Try now</h1>

<button className='i    ' >Generate Images <img  className='h-6' src={assets.star_group} alt="start"/>
      </button> 
    </div>
  );
}

export default Try;
