import React from "react";
import Image from "next/image";
import Button from "@/components/Commons/Button";

const Item2 = () => {
  return (
    <div className="w-full grid grid-cols-1 mdl:grid-cols-2 gap-12 sm:gap-16 mdl:gap-0 mt-[96px] sm:mt-[128px] md:mt-[160px] mlg:mt-[256px]  sxl:mt-[304px] sxxl:mt-[368px] xxl:mt-[344px]  vxl:mt-[608px] px-0 md:px-20 mdl:px-0  z-[10] ">
      {/* Col 1  */}
      <div className="w-full lg:w-[97%]  flex flex-col items-start justify-start gap-5 ssm:gap-8 xxl:gap-12 relative ">
        <h2 className="w-[75%] ssm:w-[70%] sm:w-[66%] md:w-[75%] mdl:w-full text-[50px] ssm:text-[65px] xxl:text-[100px] leading-[53px] ssm:leading-[66px] xxl:leading-[106px] text-white font-medium ssm:font-bold text-left z-[999] md:z-auto">
          Elimina tutte le barriere tra fisico e digitale
        </h2>
        <p className="w-full vxl:w-[70%] text-left text-softPeach text-[16px] ssm:text-[20px]  z-[999] md:z-auto">
          Collega in modo irreversibile il prodotto fisico e quello digitale per
          fornire informazioni su edizioni limitate di prodotti rari ai clienti,
          aumentandone il valore e l’attrattività per i consumatori.
        </p>
        <p className="w-full vxl:w-[70%] text-left text-softPeach text-[16px] ssm:text-[20px] z-[999] md:z-auto ">
          Offriamo assistenza durante tutto il processo, dalla progettazione
          alla creazione, per realizzare il prodotto perfetto da offrire ai
          proprietari di NFT e a chiunque altro.
        </p>
        <div className="w-full flex items-center justify-start z-[999] md:z-auto">
          <Button text="SCOPRI DI PIÙ" />
        </div>
        {/* Cube 03  */}
        <div>
          {/* => Upto 1366px   */}
          <div className="w-[400px] h-[700px] -left-[48px] top-[416px] mlg:top-[384px]  absolute hidden mdl:flex mxl:hidden items-center justify-center object-contain z-[-1]">
            <Image src="/images/cubes/cube3a.svg" alt="" fill />
          </div>
          {/* Upto 1920 px  */}
          <div className=" mxl:w-[1400px]  h-[700px] mxl:left-[-224px]  mxl:top-[368px] sxxl:top-[224px]  absolute  mxl:flex xxl:hidden  items-center justify-center object-contain z-[-1]">
            <Image src="/images/cubes/cube3b.svg" alt="" fill />
          </div>
          {/* Cube 4 => Mobile  */}
          <div className="w-[133px] sm:w-[193px] h-[344px] absolute right-[-22.4px] ssm:right-[-28.8px] top-[48px] xs:top-[0px] ssm:top-[128px] sm:top-[-16px] flex md:hidden items-center justify-center  object-contain z-[1] ">
            <Image src="/images/cubes/cube4-mob.svg" alt="" fill />
          </div>
        </div>
      </div>
      {/* Col 2  */}
      <div className=" w-full flex items-end justify-center mdl:justify-end mxl:items-start  mdl:pt-[352px] mlg:pt-[288px] mxl:pt-0 xxl:pt-[144px] vxl:pt-0 relative vxl:pr-[96] ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-[320px] xs:w-[354px] ssm:w-[400px] mxl:w-[485px] xxl:w-[576px] vxl:w-[790px] h-[320px] xs:h-[354px] ssm:h-[400px] mxl:h-[485px] xxl:h-[576px] vxl:h-[790px]  rounded-md md:rounded-xl object-cover z-[999] md:z-auto"
        >
          <source src="/videos/delete.mp4" type="video/mp4" />
        </video>
        {/* Cube 03  */}
        <div className="xxl:w-[1380px] vxl:w-[1680px] h-[700px] vxl:h-[800px] xxl:top-[496px] vxl:top-[400px] xxl:right-[-528px] vxl:right-[-272px]  absolute hidden xxl:flex items-center justify-center object-contain z-[-1]">
          <Image src="/images/cubes/cube3c.svg" alt="" fill />
        </div>
        {/* Cube 3 => Mobile  */}
        <div className="w-[100px] sm:w-[138px] h-[344px] absolute right-[-16px] ssm:right-[-28.8px] top-[-184px] xs:top-[-160px] ssm:top-[-224px] sm:top-[-224px] flex md:hidden items-center justify-center  object-contain z-[1] ">
          <Image src="/images/cubes/cube3-mob.svg" alt="" fill />
        </div>
      </div>
    </div>
  );
};

export default Item2;
