import React from 'react';
import { assets } from '../assets/assets';

const Des = () => {
  return (
<div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
            <h1 className='text-3xl sm:text-4xl font-semibold mb-2 '>Create AI Images</h1>
            <p className=' tet-lg mb-8 text-gray-500'> Turn your imagination into visuals </p>

<div>
<img src={assets.sample_img_2} alt="Credits" className="w-80" />

</div>

    </div>      
  );
}

export default Des;
