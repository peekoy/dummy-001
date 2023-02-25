import React from "react";
import menu from "../assets/menu.svg"

const Navbar = () => {
  return (
    <nav className="flex w-full h-[72px] bg-sky-500 border-b-2 items-center ">
      <div className="flex items-center justify-between w-screen mx-6">
        <h1>
           <a className="font-semibold text-xl" href="">Home</a>
         </h1>

        <ul className="font-medium gap-16 hidden lg:flex">
          <li>
            <a href="">About Me</a>
           </li>
          <li>
             <a href="">Service</a>
           </li>
          <li>
            <a href="">Task</a>
          </li>
          <li>
            <a href="">Contact</a>
           </li>
        </ul>
        <img className="block lg:hidden fill-white" src={menu} />
      </div> 
    </nav>
  );
}

export default Navbar