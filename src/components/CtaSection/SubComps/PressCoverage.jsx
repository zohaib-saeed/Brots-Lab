import React from "react";
import Image from "next/image";

const PressCoverage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start gap-28 pb-[600px] mt-[14em]">
      <h2 className="w-full text-center text-[50px] ssm:text-[65px] xxl:text-[100px] leading-[53px] ssm:leading-[66px] xxl:leading-[106px] text-white font-normal ssm:font-medium z-[999] md:z-auto">
        Press Coverage
      </h2>
      {/* Logo's Container  */}
      <div className="w-full flex items-center justify-between gap-6">
        {/* => Forbes  */}
        <div className="w-[110px] h-[29px] relative flex items-center justify-center object-contain">
          <Image src="/images/press/forbes.svg" alt="" fill />
        </div>
        {/* => 24 ORE  */}
        <div className="w-[167px] h-[70px] relative flex items-center justify-center object-contain">
          <Image src="/images/press/24ore.svg" alt="" fill />
        </div>
        {/* => La Republica  */}
        <div className="w-[181px] h-[40px] relative flex items-center justify-center object-contain">
          <Image src="/images/press/la-republica.svg" alt="" fill />
        </div>
        {/* => Daily Mail*/}
        <div className="w-[234px] h-[125px] relative flex items-center justify-center object-contain">
          <Image src="/images/press/daily-mail.svg" alt="" fill />
        </div>
        {/* => Bill Borad*/}
        <div className="w-[185px] h-[39px] relative flex items-center justify-center object-contain">
          <Image src="/images/press/billboard.svg" alt="" fill />
        </div>
        {/* => Yahoo*/}
        <div className="w-[149px] h-[42px] relative flex items-center justify-center object-contain">
          <Image src="/images/press/yahoo.svg" alt="" fill />
        </div>
      </div>
    </div>
  );
};

export default PressCoverage;
