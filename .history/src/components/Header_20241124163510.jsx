import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
<div className="flex flex-col justify-center items-center text-center my-20 ">
<div className="text-stone-500 inline-flex text-center ">
    <p>Best text to image generator</p>
<img src={assets.star_icon} alt="start"/>   
    </div>    </div>
  );
}

export default Header;