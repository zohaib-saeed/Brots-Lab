import React from "react";
import Image from "next/image";

const PressCoverage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start gap-20 mxl:gap-24 xxl:gap-28 vxl:gap-32 pb-[600px] sxl:mt-[28em] mxl:mt-[29em] xxl:mt-[36em] vxl:mt-[31em]">
      <h2 className="w-full text-center vxl:text-left text-[50px] ssm:text-[65px] xxl:text-[100px] leading-[53px] ssm:leading-[66px] xxl:leading-[106px] text-white font-medium xxl:font-bold z-[999] md:z-auto">
        Press Coverage
      </h2>
      {/* Logo's Container  */}
      <div className="w-full flex items-center justify-between gap-6">
        {/* => Forbes  */}
        <div className="w-[110px] mxl:w-[120px] xxl:w-[170px] vxl:w-[186px] h-[29px] mxl:h-[32px] xxl:h-[45px] vxl:h-[49px] relative flex items-center justify-center object-contain">
          <Image src="/images/press/forbes.svg" alt="" fill />
        </div>
        {/* => 24 ORE  */}
        <div className="w-[167px] mxl:w-[183px] xxl:w-[261px] vxl:w-[285px] h-[70px] mxl:h-[76px] xxl:h-[108px] vxl:h-[118px] relative flex items-center justify-center object-contain">
          <Image src="/images/press/24ore.svg" alt="" fill />
        </div>
        {/* => La Republica  */}
        <div className="w-[181px] mxl:w-[196px] xxl:w-[278px] vxl:w-[304px] h-[40px] mxl:h-[43px] xxl:h-[61px] vxl:h-[66px] relative flex items-center justify-center object-contain">
          <Image src="/images/press/la-republica.svg" alt="" fill />
        </div>
        {/* => Daily Mail*/}
        <div className="w-[234px] mxl:w-[253px] xxl:w-[361px] vxl:w-[394px] h-[125px] mxl:h-[135px] xxl:h-[193px] vxl:h-[211px] relative flex items-center justify-center object-contain">
          <Image src="/images/press/daily-mail.svg" alt="" fill />
        </div>
        {/* => Bill Borad*/}
        <div className="w-[185px] mxl:w-[200px] xxl:w-[285px] vxl:w-[311px] h-[39px] mxl:h-[42px] xxl:h-[66px] vxl:h-[66px] relative flex items-center justify-center object-contain">
          <Image src="/images/press/billboard.svg" alt="" fill />
        </div>
        {/* => Yahoo*/}
        <div className="w-[149px] mxl:w-[162px] xxl:w-[231px] vxl:w-[252px] h-[42px] mxl:h-[45px] xxl:h-[70px] vxl:h-[76px] relative flex items-center justify-center object-contain">
          <Image src="/images/press/yahoo.svg" alt="" fill />
        </div>
      </div>
    </div>
  );
};

export default PressCoverage;
