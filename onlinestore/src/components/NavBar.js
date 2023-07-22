import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [hamON, setHamON] = useState(false);

  const HamToggle = () => {
    setHamON(!hamON);
  };

  return (
    <div className="flex justify-between items-center px-4 py-2 bg-black text-white">
      <Link  to='/' className="text-[32px] font-semibold ">Online Store</Link>
      <div className="hidden sm:flex text-[22px] gap-8 font-semibold">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/search">Search</Link>
      </div>
      <div className="sm:hidden">
        <div className="flex flex-col gap-1" onClick={HamToggle}>
          <div
            className={
              !hamON
                ? "w-[20px] h-[2px] bg-white duration-300"
                : "w-[20px] h-[2px] bg-white rotate-[45deg] translate-y-[0.3rem] duration-300"
            }
          ></div>
          <div className={!hamON ? "w-[20px] h-[2px] bg-white" : ""}></div>
          <div
            className={
              !hamON
                ? "w-[20px] h-[2px] bg-white duration-300"
                : "w-[20px] h-[2px] bg-white -rotate-[45deg] -translate-y-[0.3rem] duration-300"
            }
          ></div>
        </div>
        <div
          className={
            !hamON
              ? "absolute flex flex-col right-0 -top-10 -z-10 p-4"
              : "text-black absolute flex flex-col bg-slate-100 p-4 right-0 transform transition-top duration-500 ease-in-out top-[4rem] z-10"
          }
        >
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/search">Search</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
