import React from 'react';
import { assets } from '../assets/assets';
import {Link} from 'react-router-dom';
const Navbar = () => {

    const [user,setUser] = userState(null)
  return (
    <div className='flex items-center ju '>
     <Link to='/'>

     <img src={assets.logo} alt="" className='w-28 sm:w-32 lg:w-40' />

     </Link>



     <div>
      {user ?
     <div>  </div>
:
<div> 

  <p>pricing</p>
  <button>login</button>
</div>


      }




     </div>
    </div>
  );
}

export default Navbar;
