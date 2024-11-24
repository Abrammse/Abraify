import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div>
<dive className="flex">
    <p>Best text to image generator</p>
<img src={assets.star_icon} alt="start"/>   
    </dive>    </div>
  );
}

export default Header;
