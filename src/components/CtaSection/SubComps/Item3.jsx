import React from "react";
import Image from "next/image";
import Button from "@/components/Commons/Button";

const Item3 = () => {
  return (
    <div className="w-full grid grid-cols-1 mdl:grid-cols-2 gap-12 sm:gap-16 mdl:gap-0 mt-[6em] sm:mt-[8em] mdl:mt-[15em] mlg:mt-[15em]  mxl:mt-[34em] sxxl:mt-[27em] xxl:mt-[20em] vxl:mt-[23em] px-0 md:px-20 mdl:px-0 ">
      {/* Col 1 */}
      <div className="order-last mdl:order-first w-full flex items-start justify-center mdl:justify-start  relative ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-[324px] xs:w-[354px] ssm:w-[400px] mxl:w-[485px] xxl:w-[576px] vxl:w-[790px] h-[324px] xs:h-[354px] ssm:h-[400px] mxl:h-[485px] xxl:h-[576px] vxl:h-[790px] rounded-md md:rounded-xl object-cover z-[999] md:z-auto "
        >
          <source src="/videos/collaborate.mp4" type="video/mp4" />
        </video>
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
          {/* Cube 6b => From 768px t0 976px  */}
          <div className="w-[1100px]  h-[700px] -right-[10em] top-[7em] absolute hidden mdl:hidden md:flex items-center justify-center object-contain">
            <Image src="/images/cubes/cube6b.svg" alt="" fill />
          </div>
          {/* Cube 6 => Mobile  */}
          <div className="w-[598px] h-[300px] sm:h-[405px] absolute left-[-17em] ssm:left-[-18em] sm:left-[-17em] top-[-6em] ssm:top-[-6em] sm:top-[-7em] flex md:hidden items-center justify-center  object-contain z-[1] ">
            <Image src="/images/cubes/cube1-mob.svg" alt="" fill />
          </div>
          {/* Cube 7 => Mobile  */}
          <div className="w-[413px] sm:w-[536px] h-[344px] absolute right-[-9em] xs:right-[-6em]  sm:right-[-7em] top-[15.5em] xs:top-[18em] ssm:top-[20em] sm:top-[22em] flex md:hidden items-center justify-center  object-contain z-[1] ">
            <Image src="/images/cubes/cube5-mob.svg" alt="" fill />
          </div>
        </div>
      </div>
      {/* Col 2  */}
      <div className="w-full relative md:pt-[9em] mxl:pt-0 xxl:pt-[7em] vxl:pt-0 ">
        <div className="w-full  xxl:w-[90%]  flex flex-col items-start justify-start gap-5 ssm:gap-8 xxl:gap-12 ">
          <h2 className="w-[75%] md:w-[75%] mdl:w-full   lg:w-[80%] xxl:w-full text-[50px] ssm:text-[65px] xxl:text-[100px] leading-[53px] ssm:leading-[66px] xxl:leading-[106px] text-white font-medium ssm:font-bold text-left z-[999] md:z-auto">
            Collabora come mai prima d’ora
          </h2>
          <p className="w-full xxl:w-[81%] vxl:w-[80%] text-left text-softPeach text-[16px] ssm:text-[20px] z-[999] md:z-auto ">
            Collabora con altri brand per lanciare insieme una collezione
            speciale o un evento importante. Sfida i concetti di esclusività e
            sorprendi i possessori degli NFT con nuove opportunità per
            distinguersi.
          </p>

          <div className="w-full flex items-center justify-start z-[999] md:z-auto">
            <Button text="SCOPRI DI PIÙ" />
          </div>
          <div>
            {/* Cube 4a => Upto 1366px  */}
            <div className="w-[1000px] h-[700px] absolute right-[-55em] mdl:right-[-40em] top-[-52em] mdl:w-full  mdl:top-[-20em] hidden md:flex mxl:hidden items-center justify-center object-contain ">
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
            {/* Cube 6a => From 768px t0 976px  */}
            <div className="w-[420px]  h-[700px] -right-[19.9em] top-[-14em] absolute hidden mdl:hidden md:flex items-center justify-center object-contain">
              <Image src="/images/cubes/cube6a.svg" alt="" fill />
            </div>
            {/* Cube 5 => Mobile  */}
            <div className="w-[413px] sm:w-[536px] h-[344px] absolute right-[-11.2em]  sm:right-[-14.3em] top-[-13em] flex md:hidden items-center justify-center  object-contain z-[1] ">
              <Image src="/images/cubes/cube5-mob.svg" alt="" fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item3;
