import React from "react";
import Image from "next/image";

const PressCoverage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start gap-16 ssm:gap-20 md:gap-32 lg:gap-40 sxl:gap-20 mxl:gap-24 xxl:gap-28 vxl:gap-32 pb-[600px] mt-[256px] sm:mt-[320px] sxl:mt-[400px] mxl:mt-[464px] xxl:mt-[576px] vxl:mt-[496px]">
      <h2 className="w-full text-left md:text-center vxl:text-left text-[50px] ssm:text-[65px] xxl:text-[100px] leading-[53px] ssm:leading-[66px] xxl:leading-[106px] text-white font-medium xxl:font-bold z-[999] md:z-auto">
        Press Coverage
      </h2>
      {/* Logo's Container => From 1280px and above*/}
      <div className="w-full hidden  sxl:flex sxl:items-center justify-between ">
        {/* => Forbes  */}
        <div className="w-[168px] sxl:w-[110px] mxl:w-[120px] xxl:w-[170px] vxl:w-[186px] h-[44px] sxl:h-[29px] mxl:h-[32px] xxl:h-[45px] vxl:h-[49px] relative flex items-center justify-center object-contain">
          <Image src="/images/press/forbes.svg" alt="" fill />
        </div>
        {/* => 24 ORE  */}
        <div className="w-[280px] sxl:w-[167px] mxl:w-[183px] xxl:w-[261px] vxl:w-[285px] h-[59px] sxl:h-[70px] mxl:h-[76px] xxl:h-[108px] vxl:h-[118px] relative flex items-center justify-center object-contain">
          <Image src="/images/press/24ore.svg" alt="" fill />
        </div>
        {/* => La Republica  */}
        <div className="w-[272px] sxl:w-[181px] mxl:w-[196px] xxl:w-[278px] vxl:w-[304px] h-[60px] sxl:h-[40px] mxl:h-[43px] xxl:h-[61px] vxl:h-[66px] relative flex items-center justify-center object-contain">
          <Image src="/images/press/la-republica.svg" alt="" fill />
        </div>
        {/* => Daily Mail*/}
        <div className="w-[354px] sxl:w-[234px] mxl:w-[253px] xxl:w-[361px] vxl:w-[394px] h-[189px] sxl:h-[125px] mxl:h-[135px] xxl:h-[193px] vxl:h-[211px] relative flex items-center justify-center object-contain">
          <Image src="/images/press/daily-mail.svg" alt="" fill />
        </div>
        {/* => Bill Borad*/}
        <div className="w-[257px] sxl:w-[185px] mxl:w-[200px] xxl:w-[285px] vxl:w-[311px] h-[106px] sxl:h-[39px] mxl:h-[42px] xxl:h-[66px] vxl:h-[66px] relative flex items-center justify-center object-contain">
          <Image src="/images/press/billboard.svg" alt="" fill />
        </div>
        {/* => Yahoo*/}
        <div className="w-[227px] sxl:w-[149px] mxl:w-[162px] xxl:w-[231px] vxl:w-[252px] h-[163px] sxl:h-[42px] mxl:h-[45px] xxl:h-[70px] vxl:h-[76px] relative flex items-center justify-center object-contain">
          <Image src="/images/press/yahoo.svg" alt="" fill />
        </div>
      </div>
      {/* Logo's Container => From 768px to 1280px*/}
      <div className="w-full hidden md:grid grid-cols-2  sxl:hidden gap-6">
        {/* => Forbes  */}
        <div className="flex items-center justify-center">
          <div className="w-[168px] h-[44px] relative flex items-center justify-center object-contain">
            <Image src="/images/press/forbes.svg" alt="" fill />
          </div>
        </div>
        {/* => Bill Borad*/}
        <div className="flex items-center justify-center">
          <div className="w-[280px] h-[59px] relative flex items-center justify-center object-contain">
            <Image src="/images/press/billboard.svg" alt="" fill />
          </div>
        </div>
        {/* => La Republica  */}
        <div className="flex items-center justify-center">
          <div className="w-[272px] h-[60px] relative flex items-center justify-center object-contain">
            <Image src="/images/press/la-republica.svg" alt="" fill />
          </div>
        </div>
        {/* => Daily Mail*/}
        <div className="flex items-center justify-center">
          <div className="w-[354px] h-[189px] relative flex items-center justify-center object-contain">
            <Image src="/images/press/daily-mail.svg" alt="" fill />
          </div>
        </div>
        {/* => 24 ORE  */}
        <div className="flex items-center justify-center">
          <div className="w-[257px] h-[106px] relative flex items-center justify-center object-contain">
            <Image src="/images/press/24ore.svg" alt="" fill />
          </div>
        </div>
        {/* => Yahoo*/}
        <div className="flex items-center justify-center">
          <div className="w-[227px] h-[63px] relative flex items-center justify-center object-contain">
            <Image src="/images/press/yahoo.svg" alt="" fill />
          </div>
        </div>
      </div>
      {/* Logo's Container => From 0px to 768px*/}
      <div className="w-full md:hidden flex flex-col items-center justify-center gap-2">
        <div className="w-full flex justify-between items-center   gap-2">
          {/* => Forbes  */}
          <div className="flex items-center justify-center">
            <div className="w-[100px] ssm:w-[140px] h-[26px] ssm:h-[76px] relative flex items-center justify-center object-contain">
              <Image src="/images/press/forbes.svg" alt="" fill />
            </div>
          </div>
          {/* => Yahoo Finance*/}
          <div className="flex items-center justify-center">
            <div className="w-[111px] ssm:w-[151px] h-[47px] ssm:h-[87px] relative flex items-center justify-center object-contain">
              <Image src="/images/press/yahoo-finance.svg" alt="" fill />
            </div>
          </div>
          {/* => 24 ORE  */}
          <div className="flex items-center justify-center">
            <div className="w-[90px] ssm:w-[140px] h-[37px] ssm:h-[77px] relative flex items-center justify-center object-contain">
              <Image src="/images/press/24ore.svg" alt="" fill />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center gap-6 ssm:gap-10">
          {/* => La Republica  */}
          <div className="flex items-center justify-center">
            <div className="w-[143px] ssm:w-[183px] h-[31px] ssm:h-[81px] relative flex items-center justify-center object-contain">
              <Image src="/images/press/la-republica.svg" alt="" fill />
            </div>
          </div>
          {/* => Daily Mail*/}
          <div className="flex items-center justify-center">
            <div className="w-[158px] ssm:w-[198px] h-[84px] ssm:h-[124px] relative flex items-center justify-center object-contain">
              <Image src="/images/press/daily-mail.svg" alt="" fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressCoverage;
