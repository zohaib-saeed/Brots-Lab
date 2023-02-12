import React from "react";
import Image from "next/image";
import Button from "@/components/Commons/Button";

const Item3 = () => {
  return (
    <div className="w-full grid grid-cols-1 mdl:grid-cols-2 gap-16 mdl:gap-0 pb-[600px] mt-[10em] mdl:mt-[15em] mlg:mt-[15em]  mxl:mt-[34em] sxxl:mt-[27em] xxl:mt-[20em] vxl:mt-[23em] px-16 md:px-20 mdl:px-0 ">
      {/* Col 1 */}
      <div className="order-last mdl:order-first w-full flex items-start justify-center mdl:justify-start  relative ">
        <div className="w-[400px] sxl:w-[485px] xxl:w-[576px] vxl:w-[773px] h-[400px] sxl:h-[485px] xxl:h-[576px] vxl:h-[773px]  relative flex items-center justify-center object-cover ">
          <Image src="/images/collaborate.png" alt="" fill />
        </div>
        <div>
          {/* Cube 4b => From 1366 Upto 2560px  */}
          <div className="w-[1396px] xxl:w-[1689px] h-[700px] absolute left-[-44em] xxl:left-[-57em] top-[23em] xxl:top-[34em] hidden mxl:flex vxl:hidden items-center justify-center object-contain">
            <Image src="/images/cubes/cube4b.svg" alt="" fill />
          </div>
          {/* Cube 4c => From 2560px  to onwards */}
          <div className="w-[1889px]  h-[420px] absolute left-[-25em] top-[41em] hidden vxl:flex  items-center justify-center object-contain">
            <Image src="/images/cubes/cube4c.svg" alt="" fill />
          </div>
          {/* Cube 4e =>  2560px to onwards */}
          <div className="w-[1680px] h-[700px] absolute left-[-56em] top-[-33em] hidden vxl:flex items-center justify-center object-contain">
            <Image src="/images/cubes/cube4e.svg" alt="" fill />
          </div>
        </div>
      </div>
      {/* Col 2  */}
      <div className="w-full relative pt-[9em] mxl:pt-0 xxl:pt-[7em] vxl:pt-0 ">
        <div className="w-full  xxl:w-[90%]  flex flex-col items-start justify-start gap-5 ssm:gap-8 xxl:gap-12 ">
          <h2 className="w-[75%] mdl:w-full   lg:w-[80%] xxl:w-full text-[50px] ssm:text-[65px] xxl:text-[100px] leading-[53px] ssm:leading-[66px] xxl:leading-[106px] text-white font-medium ssm:font-bold text-left">
            Collabora come mai prima d’ora
          </h2>
          <p className="w-full xxl:w-[81%] vxl:w-[80%] text-left text-softPeach text-[16px] ssm:text-[20px]  ">
            Collabora con altri brand per lanciare insieme una collezione
            speciale o un evento importante. Sfida i concetti di esclusività e
            sorprendi i possessori degli NFT con nuove opportunità per
            distinguersi.
          </p>

          <div className="w-full flex items-center justify-start">
            <Button text="SCOPRI DI PIÙ" />
          </div>
          <div>
            {/* Cube 4a => Upto 1366px  */}
            <div className="w-[1000px] h-[700px] absolute right-[-55em] mdl:right-[-40em] top-[-60w-[75%] mdl:w-full em] mdl:top-[-20em] flex mxl:hidden items-center justify-center object-contain">
              <Image src="/images/cubes/cube4a.svg" alt="" fill />
            </div>
            {/* Cube 4d => From 1920px to onwards */}
            <div className="w-[1000px] h-[530px] vxl:w-[421px] vxl:h-[630px] absolute right-[-31em] vxl:right-[-10.3em] xxl:top-[19em] vxl:top[11em] hidden xxl:flex  items-center justify-center object-contain">
              <Image src="/images/cubes/cube4d.svg" alt="" fill />
            </div>
            {/* Cube 5a => From 1280px to 1360px */}
            <div className="w-[1000px] mlg:w-[1070px] h-[530px]  absolute mdl:right-[-9em] lg:right-[-4em] mlg:right-[-3em] top-[21em] lg:top-[23em] mlg:top-[20em] sxl:top-[26em] hidden mdl:flex mxl:hidden  items-center justify-center object-contain">
              <Image src="/images/cubes/cube5a.svg" alt="" fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item3;
