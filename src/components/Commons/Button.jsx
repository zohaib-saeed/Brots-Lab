import React from "react";
import Image from "next/image";

const Button = ({ text }) => {
  return (
    <button className=" flex justify-between items-center h-[40px] w-[300px] bg-white px-2 rounded">
      <p className="text-black uppercase font-normal text-lg leading-[0px]">
        {text}
      </p>
      <div className="w-[13px] h-[13px] relative flex items-center justify-center object-contain  ">
        <Image src="/icons/arrow-right-top.svg" alt="" fill />
      </div>
    </button>
  );
};

export default Button;
