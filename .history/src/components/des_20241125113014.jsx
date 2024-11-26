import React from 'react';
import { assets } from '../assets/assets';

const Des = () => {
  return (
<div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
            <h1 className='text-3xl sm:text-4xl font-semibold mb-2 '>Create AI Images</h1>
            <p className=' tet-lg mb-8 text-gray-500'> Turn your imagination into visuals </p>

<div>
<img src={assets.sample_img_2} alt="Credits" className="w-80 xl:w9 rounded-lg " />

<div>
    <h2>
    Introducing the AI-Powered Text to Image Generator
    </h2>
    <p>
    Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.
    </p>

    <p>
        
    </p>
</div>

</div>

    </div>      
  );
}

export default Des;
