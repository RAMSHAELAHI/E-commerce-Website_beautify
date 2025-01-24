import React from "react";
import { GiEyelashes } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { GrCart } from "react-icons/gr";

export default function Navbar() {
  return (
    <div>
      <div className="grid xl:grid-cols-1 grid-cols-1">
        <div className="p-5">
          <div className="py-3 px-3 rounded-xl border w-full bg-gradient-to-r from-black-to-grey-900">
            <div className="flex justify-between items-center gap-2">
              <div className="flex justify-items-center items-center gap-8">
                {/* Logo Cosmetic   */}
                <GiEyelashes className="w-6 h-6 text-yellow-500 hover:text-cyan-200" />
                {/* Logo search icon    */}

                <div style={{ position: "relative" }}>
                  <input
                    className="rounded-3xl py-3 px-3 outline-nonetexr-xs w-[350px]
                   pr-10 hidden lg:block md:block"
                    placeholder="Search for your cosmetic from Items"
                  />

                  <FaSearch className=" w-5 h-5 text-lime-400  absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block " />
                </div>
              </div>

              <div className="flex justify-center items-center gap-2">
                <FaBolt className="justify-center w-5 h-5 text-amber-600 hidden lg:block md:block" />
                <p className="text-sm hidden lg:block md:block text-emerald-400">
                  Order now & get within
                  <span className="text-amber-600"> 2 Days </span>
                </p>
              
              {/* Cart icon */}
              <GrCart className="w-8 h-8 text-amber-400 rounded-full ring-2  ring-emerald-500 p-1 relative  hover:text-amber-700" />
              <img
              className="inline-block w-8 h-8 rounded-full ring-2  ring-emerald-500 hover-amber-500"
              src="/images/ramsha picture dp.jpeg"
              height= "h-full"
              width="w-full"
              alt=" user avtar"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
