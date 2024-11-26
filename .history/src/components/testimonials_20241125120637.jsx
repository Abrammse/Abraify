import React from 'react';
import { assets, testimonialsData } from '../assets/assets';

const Testimonials = () => {
  return (
<div className='flex flex-col items-center justify-center my-20 py-12'>
            <h1 className='text-3xl sm:text-4xl font-semibold mb-2 '>Customer testimonials</h1>
            <p className='  mb-12 text-gray-500'> What Our Users Are Saying </p>      

            <div className='flex flex-wrap gap-6 '>
        {testimonialsData.map((item,index)=>(
            <div className key={index}  className='rounded-full w-24 ' >
                <img src={item.image} alt="" />
            <div>
                <h2 className='text-xl  font-medium' > {item.name}</h2>
                <p className='text-gray-500' > {item.role}</p>
                <div className='flex mb-4'>
{Array(item.stars).fill().map((ite,index)=>(
                    <img   key={index} src={assets.rating_star} alt="" />

))}

                </div>
                <p className='text-gray-500' > {item.text}</p>

            </div>
            </div>
        ))}
      </div>
                
    </div>

  );
}

export default Testimonials;
