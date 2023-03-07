import React                    from "react";
import logo                     from "../assets/logo.png";
import usa                      from "../assets/usa.png";
import { BsCart2 }              from "react-icons/bs";
import { FiSearch }             from "react-icons/fi";
import { GoSettings }           from "react-icons/go";
import { BiWorld }              from "react-icons/bi";
import { IoMdArrowDropdown }    from "react-icons/io";

const Navbar = () => {
    return (
        <div className = "bg-[#131921] p-4 flex justify-between md:px-6">
            {/* Left */}
            <div className             = "flex items-center shrink-0">
                <div className         = "h-10 flex">
                    <img src           = {logo} className = "object-cover" />
                </div>
                <div className         = "text-white/80 pl-5 flex items-center hover:scale-110">
                    <BiWorld className = "text-[20px] mr-1" />
                    <p className       = "hidden sm:flex cursor-default"> Location </p>
                </div>
            </div>
            {/* Middle */}
            <div className = "flex items-center w-full">
                {/* INPUT */}
                <div className         = "hidden sm:flex relative w-full mx-4">
                    <input type        = "search" 
                        placeholder    = "Search..."
                        className      = "py-2 rounded-full pl-12 outline-none w-full" />
                    <button className  = "absolute bg-orange-300 h-full w-10 right-0 flex items-center justify-center rounded-r-full">
                        <FiSearch className = "text-[20px] mr-1" />
                    </button>
                    <button className  = "absolute h-full w-10 left-0 flex items-center justify-center rounded-r-full">
                        <GoSettings />
                    </button>
                </div>
                {/* FLAG */}
                <div className = "pl-4 text-white flex items-center font-bold cursor-pointer mr-3 shrink-0">
                    <img src = {usa} className = "w-8 mr-2"/>
                    <p> US </p>
                    <IoMdArrowDropdown className = "text-[15px] w-4 mt-1"/>
                </div>
            </div>
            {/* Right */}
            <div className        = "relative flex items-center justify-center text-white text-[28px]">
                <BsCart2 />
                <div className    = "absolute text-[16px] h-full -top-2 right-2.1 text-orange-300">
                    <p> 0 </p>
                </div>
            </div>
           
        </div>
    );
}

export default Navbar;