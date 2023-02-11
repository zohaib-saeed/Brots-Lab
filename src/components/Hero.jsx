import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full min-h-[800px] ssm:min-h-0 h-[100vh] ssm:h-[930px] lg:h-[100vh] flex flex-col items-center justify-end  lg:justify-center  px-4 ssm:px-6 lg:px-8 mxl:px-16 bg-[url('/images/hero-bg-sm.svg')] sxl:bg-[url('/images/hero-bg.svg')] bg-no-repeat bg-hero-sm sxl:bg-center bg-cover bg-black  relative">
      <div className="w-full flex justify-between lg:justify-start items-center absolute top-3 xs:top-4 ssm:top-5 left-0 px-4 ssm:px-6 lg:px-8 mxl:px-16">
        {/* => Logo  */}
        <div className="w-[120px] h-[32px] relative flex items-center justify-center object-contain">
          <Image src="/images/logo.svg" alt="" fill />
        </div>
        {/* => Menu Button  */}
        <div className="bg-white w-[31px] h-[31px] lg:hidden flex items-center justify-center rounded-full cursor-pointer ">
          <Image src="/icons/menu.svg" alt="" width={20} height={10} />
        </div>
      </div>
      <div className="w-full flex flex-col items-start justify-start gap-5 md:gap-8  pb-16 sxl:pb-0 lg:pt-28 ">
        <h1 className="text-[55px] ssm:text-[80px] md:text-[100px] text-white font-bold leading-[56px] ssm:leading-[81px] md:leading-[90px] lg:leading-[82px]">
          Posiziona <br className="hidden md:inline" />
          il tuo brand <br className="hidden md:inline" />
          nel mondo <span className="text-darkViolet">Web3</span>
        </h1>
        <p className="text-xl leading-[22px] text-mercury font-normal lg:font-medium text-left w-[90%] ssm:w-[81%] md:w-[55%] sxl:w-[42%]">
          Rafforza il legame con i tuoi clienti e aumenta le vendite offrendo un
          accesso esclusivo a prodotti ed esperienze.
        </p>
        <button className=" flex justify-between items-center h-[40px] w-[300px] bg-white px-2 rounded">
          <p className="text-black uppercase font-normal text-lg leading-[0px]">
            INIZIA
          </p>
          <div className="w-[13px] h-[13px] relative flex items-center justify-center object-contain  ">
            <Image src="/icons/arrow-right-top.svg" alt="" fill />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Hero;
