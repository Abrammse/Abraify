import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [user, setUser] = useState(null);

  return (
    <div className="flex items-center justify-between py-4">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="w-28 sm:w-32 lg:w-40" />
      </Link>

      <div>
        {user ? (
          <div>
            {/* Content for logged-in user */}
            <p>Welcome, {user.name || 'User'}</p>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5">
            <p className='cursor-pointer'>Pricing</p>
            <button >Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
