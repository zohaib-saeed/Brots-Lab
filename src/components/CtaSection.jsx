import Image from "next/image";
import React from "react";
import Button from "./Commons/Button";
const CtaSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-10 ssm:py-16 mxl:py-28 px-4 ssm:px-6 lg:px-12 mxl:px-20 xxl:px-40 bg-black overflow-hidden">
      {/* => CTA Item 1 */}
      <div className="w-full grid grid-cols-2  ">
        {/* Col 1 */}
        <div className="w-full flex items-start justify-start pt-20 mxl:pt-28 xxl:pt-36 vxl:pt-0  relative ">
          <div className="w-[400px] sxl:w-[485px] xxl:w-[576px] vxl:w-[895px]  h-[350px] sxl:[393px] xxl:h-[467px] vxl:h-[729px] relative flex items-center justify-center object-cover ">
            <Image src="/images/happy-customer.png" alt="" fill />
          </div>
          {/* Cube 01  */}
          <div
            className="w-[400px]  sxl:w-[420px] xxl:w-[530px] vxl:w-[630px] h-[700px]  xxl:h-[800px] -left-[150px]  sxl:left-[-185px] xxl:left-[-313px] vxl:left-[-379px] top-[220px] 
          sxl:top-[260px] xxl:top-[249px] vxl:top-[377px] absolute flex items-center justify-center object-contain"
          >
            <Image src="/images/cubes/cube1.svg" alt="" fill />
          </div>
        </div>
        {/* Col 2  */}
        <div className="w-full relative">
          <div className="w-full xxl:w-[90%]  flex flex-col items-start justify-start gap-5 ssm:gap-8 xxl:gap-12 ">
            <h2 className="text-[50px] ssm:text-[65px] xxl:text-[100px] leading-[50px] ssm:leading-[63px] xxl:leading-[100px] text-white font-medium ssm:font-bold text-left">
              Offri una soddisfazione immediata, rendi un cliente felice
            </h2>
            <p className="w-full vxl:w-[80%] text-left text-softPeach text-[16px] ssm:text-[20px] leading-[19px] ssm:leading-[21px] ">
              Condividere l’acquisto appena effettuato rappresenta la metà del
              divertimento dello shopping.
            </p>
            <p className="w-full vxl:w-[80%] text-left text-softPeach text-[16px] ssm:text-[20px] leading-[19px] ssm:leading-[21px] ">
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
          <div className="w-[400px] mxl:w-[450px] xxl:w-[530px] vxl:w-[630px] h-[700px] vxl:h-[800px] top-[22.5em] mxl:top-[11em] xxl:top-[31em] vxl:top-[20em] -right-[100px] mxl:right-[-16em] xxl:right-[-10.2em] vxl:right-[-11.7em]  absolute flex items-center justify-center object-contain ">
            <Image src="/images/cubes/cube2.svg" alt="" fill />
          </div>
        </div>
      </div>
      {/* => CTA Item 2  */}
      <div className="w-full grid grid-cols-2 mt-[240px] sxl:mt-[22em]  pb-[600px]">
        {/* Col 1  */}
        <div className="w-full lg:w-[97%]  flex flex-col items-start justify-start gap-5 ssm:gap-8 xxl:gap-12 relative">
          <h2 className="text-[50px] ssm:text-[65px] xxl:text-[100px] leading-[50px] ssm:leading-[63px] xxl:leading-[100px] text-white font-medium ssm:font-bold text-left">
            Elimina tutte le barriere tra fisico e digitale
          </h2>
          <p className="w-full text-left text-softPeach text-[16px] ssm:text-[20px] leading-[19px] ssm:leading-[21px] ">
            Collega in modo irreversibile il prodotto fisico e quello digitale
            per fornire informazioni su edizioni limitate di prodotti rari ai
            clienti, aumentandone il valore e l’attrattività per i consumatori.
          </p>
          <p className="w-full text-left text-softPeach text-[16px] ssm:text-[20px] leading-[19px] ssm:leading-[21px] ">
            Offriamo assistenza durante tutto il processo, dalla progettazione
            alla creazione, per realizzare il prodotto perfetto da offrire ai
            proprietari di NFT e a chiunque altro.
          </p>
          <div className="w-full flex items-center justify-start">
            <Button text="SCOPRI DI PIÙ" />
          </div>
          {/* Cube 03  */}
          <div>
            {/* => Upto 1366px   */}
            <div className="w-[400px] h-[700px] -left-[3em] top-[19em]  absolute mxl:hidden flex items-center justify-center object-contain">
              <Image src="/images/cubes/cube3a.svg" alt="" fill />
            </div>
            {/* Upto 1920 px  */}
            <div className=" mxl:w-[1000px] h-[700px] mxl:left-[-5em]  mxl:top-[260px]  absolute  mxl:flex xxl:hidden  items-center justify-center object-contain">
              <Image src="/images/cubes/cube3b.svg" alt="" fill />
            </div>
          </div>
        </div>
        {/* Col 2  */}
        <div className="w-full flex items-end justify-end pt-[19em] mxl:pt-0 xxl:pt-[9em] vxl:pt-0 relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-[485px] xxl:w-[576px] h-[485px] xxl:h-[576px]  rounded-xl overflow-hidden"
          >
            <source src="/videos/delete.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
