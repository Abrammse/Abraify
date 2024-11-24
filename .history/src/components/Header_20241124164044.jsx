import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
<div className="flex flex-col justify-center items-center text-center my-20 ">
<div className="text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500 ">
    <p>Best text to image generator</p>
<img src={assets.star_icon} alt="start"/>
<h1  className='text-4xl  max-w-[300px]   sm:text- ' >Turn text to image, in seconds.</h1>
    </div>   
    
     </div>
  );
}

export default Header;