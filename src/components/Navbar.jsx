import React from 'react';
import { FaAccessibleIcon } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MagicButton from './ui/MagicButton';

export default function Navbar({ user = true }) {
  const PATHS = [
    {
      item: "About",
      icon: <FaAccessibleIcon color="gray" size={22} />,
    },
    {
      item: "Services",
      icon: <FaAccessibleIcon color="gray" size={22} />,
    },
    {
      item: "Option",
      icon: <FaAccessibleIcon color="gray" size={22} />,
    },
  ];

  return (
    <nav className="sticky top-4 z-30 bg-slate-900 w-11/12 mx-auto px-16 py-4 rounded-xl flex justify-around">
      {PATHS.map((path, index) => (
        <div key={index} className="flex gap-2 items-center">
          <Link to={`/${path.item}`} className="text-slate-300 font-bold">
            {path.item}
          </Link>
          {path.icon}
        </div>
      ))}

      <div className="flex items-center gap-3">
        {user ? (
          <>
            <Link
              to={"/login"}
              className="text-slate-800 bg-white px-4 lg:px-8 rounded-full py-1 font-bold"
            >
              login
            </Link>
          </>
        ) : (
          <>
            <Link
              to={"/login"}
              className="text-slate-800 bg-white px-4 lg:px-8 rounded-full py-1 font-bold"
            >
              Log in
            </Link>
          </>
        )}
      </div>

      <div className="flex items-center gap-3">
        <Link
          to={"/register"}
          className="text-slate-800 bg-white px-4 lg:px-8 rounded-full py-1 font-bold"
        >
          Register
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <Link
          to={"/"}
          className="text-slate-800 bg-white px-4 lg:px-8 rounded-full py-1 font-bold"
        >
          Home
        </Link>

        <div className="w-12 h-12 rounded-full grid place-items-center bg-white/25 shadow-md">
          <span className="text-white font-semibold">+</span>
        </div>
      </div>
    </nav>
  );
}
