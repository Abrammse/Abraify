import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [user, setUser] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between py-4">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="w-28 sm:w-32 lg:w-40" />
      </Link>

      <div>
        {user ? (
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700">
              <img src={assets.credit_star} alt="Credits" className="w-5" />
              <p>Credits left: 50</p>
            </button>
            <p>Hi, Abram</p>
            <div className="relative group">
              <img
                src={assets.profile_icon}
                alt="Profile"
                className="w-10 drop-shadow cursor-pointer"
              />
              <div className="absoulte hidden group-hover:block top-0 right-0 z-10  text-black rounded shadow-md pt-2">
                <ul>
                  <li >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5">
            <p
              onClick={() => navigate('/BuyCredit')}
              className="cursor-pointer hover:underline"
            >
              Pricing
            </p>
            <button
              className="bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full"
              onClick={() => navigate('/login')}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
