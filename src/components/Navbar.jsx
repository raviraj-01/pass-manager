import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <div className="container py-6 mx-auto flex justify-between px-4 items-center h-12 ">
        <div className="logo font-bold text-white text-2xl">
          <span className="text-green-700">&lt;</span>
          Pass
          <span className="text-green-700">Manager/&gt;</span>
        </div>
        <button className="text-white my-5 rounded-full flex gap-1 justify-between items-center cursor-pointer ring-white ring-1">
          <img
            className="invert w-10 p-1"
            src="/icons/github.svg"
            alt="github logo"
          />
          <span className="font-bold px-2">Github</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
