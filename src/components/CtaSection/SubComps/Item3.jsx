import React from "react";
import Image from "next/image";
import Button from "@/components/Commons/Button";

const Item3 = () => {
  return (
    <div className="w-full grid grid-cols-1 mdl:grid-cols-2 gap-12 sm:gap-16 mdl:gap-0 mt-[96px] sm:mt-[128px] mdl:mt-[240px] mlg:mt-[240px]  mxl:mt-[544px] sxxl:mt-[432px] xxl:mt-[320px] vxl:mt-[368px] px-0 md:px-20 mdl:px-0 ">
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
          <div className="w-[1396px] xxl:w-[1689px] h-[700px] absolute left-[-704px] xxl:left-[-912px] top-[368px] xxl:top-[544px] hidden mxl:flex vxl:hidden items-center justify-center object-contain">
            <Image src="/images/cubes/cube4b.svg" alt="" fill />
          </div>
          {/* Cube 4c => From 2560px  to onwards */}
          <div className="w-[1889px]  h-[420px] absolute left-[-400px] top-[656px] hidden vxl:flex  items-center justify-center object-contain">
            <Image src="/images/cubes/cube4c.svg" alt="" fill />
          </div>
          {/* Cube 4e =>  2560px to onwards */}
          <div className="w-[1680px] h-[700px] absolute left-[-896] top-[-528] hidden vxl:flex items-center justify-center object-contain">
            <Image src="/images/cubes/cube4e.svg" alt="" fill />
          </div>
          {/* Cube 6b => From 768px t0 976px  */}
          <div className="w-[1100px]  h-[700px] -right-[160px] top-[112px] absolute hidden mdl:hidden md:flex items-center justify-center object-contain">
            <Image src="/images/cubes/cube6b.svg" alt="" fill />
          </div>
          {/* Cube 6 => Mobile  */}
          <div className="w-[598px] h-[300px] sm:h-[405px] absolute left-[-272px] ssm:left-[-288px] sm:left-[-272px] top-[-96px] ssm:top-[-96px] sm:top-[-112px] flex md:hidden items-center justify-center  object-contain z-[1] ">
            <Image src="/images/cubes/cube1-mob.svg" alt="" fill />
          </div>
          {/* Cube 7 => Mobile  */}
          <div className="w-[413px] sm:w-[536px] h-[344px] absolute right-[-144px] xs:right-[-96px]  sm:right-[-112px] top-[248px] xs:top-[288px] ssm:top-[320px] sm:top-[352px] flex md:hidden items-center justify-center  object-contain z-[1] ">
            <Image src="/images/cubes/cube5-mob.svg" alt="" fill />
          </div>
        </div>
      </div>
      {/* Col 2  */}
      <div className="w-full relative md:pt-[144px] mxl:pt-0 xxl:pt-[112px] vxl:pt-0 ">
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
            <div className=" w-[1000px] w-ths h-[700px] absolute right-[-880px] mdl:right-[-640px] top-[-832px] mdl:w-full  mdl:top-[-320px] hidden md:flex mxl:hidden items-center justify-center object-contain ">
              <Image src="/images/cubes/cube4a.svg" alt="" fill />
            </div>
            {/* Cube 4d => From 1920px to onwards */}
            <div className="w-[1000px] h-[530px] vxl:w-[421px] vxl:h-[630px] absolute right-[-496px] vxl:right-[-164.8px] xxl:top-[304px] vxl:top[176epx] hidden xxl:flex  items-center justify-center object-contain">
              <Image src="/images/cubes/cube4d.svg" alt="" fill />
            </div>
            {/* Cube 5a => From 1280px to 1360px */}
            <div className="w-[1000px] mlg:w-[1070px] h-[530px]  absolute mdl:right-[-144px] lg:right-[-64px] mlg:right-[-48px] top-[336px] lg:top-[368px] mlg:top-[320px] sxl:top-[416px] hidden mdl:flex mxl:hidden  items-center justify-center object-contain">
              <Image src="/images/cubes/cube5a.svg" alt="" fill />
            </div>
            {/* Cube 6a => From 768px t0 976px  */}
            <div className="w-[420px]  h-[700px] -right-[318.4px] top-[-224px] absolute hidden mdl:hidden md:flex items-center justify-center object-contain">
              <Image src="/images/cubes/cube6a.svg" alt="" fill />
            </div>
            {/* Cube 5 => Mobile  */}
            <div className="w-[413px] sm:w-[536px] h-[344px] absolute right-[-179.2px]  sm:right-[-228.8px] top-[-208px] flex md:hidden items-center justify-center  object-contain z-[1] ">
              <Image src="/images/cubes/cube5-mob.svg" alt="" fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item3;
