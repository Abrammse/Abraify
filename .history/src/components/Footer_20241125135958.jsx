import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
 <img  className='h-6' src={assets.logo} alt="start" width={150}/>
 <p>All right reserved. Copyright @Abram.dev</p>

    </div>
    
  );
}

export default Footer;
