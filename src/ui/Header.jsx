import React from 'react';
import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/username';

const Header = () => {
  return (
    <header className=" flex items-center justify-between gap-2 border-b border-stone-300 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="font-medium tracking-[.15em]">
        Fast Pizza Delivering
      </Link>
      <div className="flex items-center space-x-4">
        <SearchOrder />
        <Username />
      </div>
    </header>
  );
};

export default Header;
