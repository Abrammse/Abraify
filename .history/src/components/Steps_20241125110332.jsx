import React from 'react';
import { stepsData } from '../assets/assets';

const Steps = () => {
  return (
    <div>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2 '>How it works</h1>
      <p className=' tet-lg mb-8 text-gray-600'> Transform Words Into Stunning Images </p>


      <div>
        {stepsData.map((item,index)=>(
            <div key>
                <img src={item.icon} alt="" />
            <div>
                <h2> {item.title}</h2>
                <h2> {item.description}</h2>

            </div>
            </div>
        ))}
      </div>

      </div>
  );
}

export default Steps;
