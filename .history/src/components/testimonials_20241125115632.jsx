import React from 'react';

const Testimonials = () => {
  return (
<div className='flex flex-col items-center justify-center my-20 py-12'>
            <h1 className='text-3xl sm:text-4xl font-semibold mb-2 '>Customer testimonials</h1>
            <p className='  mb-12 text-gray-500'> What Our Users Are Saying </p>      

            <div className='flex flex-wra '>
        {stepsData.map((item,index)=>(
            <div key={index}  className='flex items-center gap-4 px-8 p-5 bg-white/20 shadow-md border cursor-pointer hover:scale-[1.02]  transition-all  duration-300 rounded-lg ' >
                <img src={item.icon} alt="" />
            <div>
                <h2 className='text-xl  font-medium' > {item.title}</h2>
                <p className='text-gray-500' > {item.description}</p>

            </div>
            </div>
        ))}
      </div>
                
    </div>

  );
}

export default Testimonials;
