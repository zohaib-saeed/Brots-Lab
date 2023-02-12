import React from "react";
import Image from "next/image";
import Button from "@/components/Commons/Button";

const Item1 = () => {
  return (
    <div className="w-full grid  grid-cols-1 mdl:grid-cols-2 gap-20 mdl:gap-0 px-16 md:px-20 mdl:px-0">
      {/* Col 1 */}
      <div className="order-last mdl:order-first w-full flex items-start justify-center mdl:justify-start mdl:pt-20 mxl:pt-28 xxl:pt-36 vxl:pt-0  relative ">
        <div className="w-[400px] sxl:w-[485px] xxl:w-[576px] vxl:w-[895px]  h-[350px] sxl:[393px] xxl:h-[467px] vxl:h-[729px] relative flex items-center justify-center object-cover ">
          <Image src="/images/happy-customer.png" alt="" fill />
        </div>
        {/* Cube 01  */}
        <div
          className="w-[400px]  sxl:w-[560px] xxl:w-[650px] vxl:w-[830px] h-[700px] xxl:h-[647px] vxl:h-[800px] -left-[150px]  sxl:left-[-225px] xxl:left-[-24em] vxl:left-[-32em] top-[220px] 
    sxl:top-[295px] xxl:top-[22em] vxl:top-[25em] absolute hidden mdl:flex items-center justify-center object-contain"
        >
          <Image src="/images/cubes/cube1.svg" alt="" fill />
        </div>
      </div>
      {/* Col 2  */}
      <div className=" w-full relative">
        <div className="w-full xxl:w-[90%]  flex flex-col items-start justify-start gap-5 ssm:gap-8 xxl:gap-12 ">
          <h2 className="text-[50px] ssm:text-[65px] xxl:text-[100px] leading-[53px] ssm:leading-[66px] xxl:leading-[106px] text-white font-medium ssm:font-bold text-left">
            Offri una <br className="inline mdl:hidden sxl:inline xxl:hidden" />
            soddisfazione{" "}
            <br className="inline mdl:hidden sxl:inline xxl:hidden" />{" "}
            immediata, rendi un cliente felice
          </h2>
          <p className="w-full sxxl:w-[94%] xxl:w-[85%] vxl:w-[80%] text-left text-softPeach text-[16px] ssm:text-[20px] ">
            Condividere l’acquisto appena effettuato rappresenta la metà del
            divertimento dello shopping.
          </p>
          <p className="w-full sxxl:w-[94%] xxl:w-[85%] vxl:w-[80%] text-left text-softPeach text-[16px] ssm:text-[20px]  ">
            Aggiungendo un NFT ai tuoi prodotti fisici, puoi offrire ai tuoi
            clienti una sensazione di soddisfazione immediata mentre attendono
            il loro pacchetto e incoraggiarli a condividere il loro acquisto
            online.
          </p>
          <div className="w-full flex items-center justify-start">
            <Button text="SCOPRI DI PIÙ" />
          </div>
        </div>
        {/* Cube 02  */}
        <div className="w-[400px] mxl:w-[560px] xxl:w-[650px] vxl:w-[840px] h-[700px] xxl:h-[1000px] vxl:h-[1048px] top-[6em] mdl:top-[28em] mxl:top-[11em] xxl:top-[27em] vxl:top-[26em] right-[-20em] mdl:right-[-106px] mxl:right-[-19em] xxl:right-[-14em] vxl:right-[-11.7em]  absolute flex items-center justify-center object-contain ">
          <Image src="/images/cubes/cube2.svg" alt="" fill />
        </div>
      </div>
    </div>
  );
};

export default Item1;
