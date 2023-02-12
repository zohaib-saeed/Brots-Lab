import React from "react";
import Image from "next/image";
import Button from "@/components/Commons/Button";

const Item2 = () => {
  return (
    <div className="w-full grid grid-cols-1 mdl:grid-cols-2 gap-12 sm:gap-16 mdl:gap-0 mt-[6em] sm:mt-[8em] md:mt-[10em] mlg:mt-[16em]  sxl:mt-[19em] sxxl:mt-[23em] xxl:mt-[21.5em]  vxl:mt-[38em] px-0 md:px-20 mdl:px-0  z-[10] ">
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
          <div className="w-[400px] h-[700px] -left-[3em] top-[26em] mlg:top-[24em]  absolute hidden mdl:flex mxl:hidden items-center justify-center object-contain z-[-1]">
            <Image src="/images/cubes/cube3a.svg" alt="" fill />
          </div>
          {/* Upto 1920 px  */}
          <div className=" mxl:w-[1400px]  h-[700px] mxl:left-[-14em]  mxl:top-[25em]  absolute  mxl:flex xxl:hidden  items-center justify-center object-contain z-[-1]">
            <Image src="/images/cubes/cube3b.svg" alt="" fill />
          </div>
          {/* Cube 4 => Mobile  */}
          <div className="w-[133px] sm:w-[193px] h-[344px] absolute right-[-1.4em] ssm:right-[-1.8em] top-[3em] xs:top-[0em] ssm:top-[8em] sm:top-[-1em] flex md:hidden items-center justify-center  object-contain z-[1] ">
            <Image src="/images/cubes/cube4-mob.svg" alt="" fill />
          </div>
        </div>
      </div>
      {/* Col 2  */}
      <div className=" w-full flex items-end justify-center mdl:justify-end mxl:items-start  mdl:pt-[22em] mlg:pt-[18em] mxl:pt-0 xxl:pt-[9em] vxl:pt-0 relative vxl:pr-[6em] ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-[320px] xs:w-[354px] ssm:w-[400px] mxl:w-[485px] xxl:w-[576px] vxl:w-[790px] h-[320px] xs:h-[354px] ssm:h-[400px] mxl:h-[485px] xxl:h-[576px] vxl:h-[790px]  rounded-xl object-cover z-[999] md:z-auto"
        >
          <source src="/videos/delete.mp4" type="video/mp4" />
        </video>
        {/* Cube 03  */}
        <div className="xxl:w-[1380px] vxl:w-[1680px] h-[700px] vxl:h-[800px] xxl:top-[31em] vxl:top-[25em] xxl:right-[-33em] vxl:right-[-17em]  absolute hidden xxl:flex items-center justify-center object-contain z-[-1]">
          <Image src="/images/cubes/cube3c.svg" alt="" fill />
        </div>
        {/* Cube 3 => Mobile  */}
        <div className="w-[100px] sm:w-[138px] h-[344px] absolute right-[-1em] ssm:right-[-1.8em] top-[-11.5em] xs:top-[-10em] ssm:top-[-14em] sm:top-[-14em] flex md:hidden items-center justify-center  object-contain z-[1] ">
          <Image src="/images/cubes/cube3-mob.svg" alt="" fill />
        </div>
      </div>
    </div>
  );
};

export default Item2;
