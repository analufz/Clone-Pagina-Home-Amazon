import React from "react";

const Add = () => {
    const buttons = 
    ["Today's Deals",
    "New Products",
    "Sell",
    "Home",
    "Coupons",
    "Accessories",
];
  return (
    <div className = "bg-[#232f3e]">
      <div className = "flex items-center justify-between h-8 sm:max-w-[80vw]  lg:max-w-[55vw] mx-auto sm:px-10 text-[15px] sm:text-[16px]">
        {buttons.map((button) => (
          <div className = "group whitespace-nowrap">
              <div className = "text-gray-200/70 hover:text-white cursor-pointer px-[0.7rem]"> {button} </div>
              <div className = "h-[2px] w-full group-hover:bg-white"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Add;