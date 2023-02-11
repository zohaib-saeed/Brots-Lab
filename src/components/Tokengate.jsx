import React from "react";

const Tokengate = () => {
  return (
    <div className="w-full h-[700px] sm:h-[800px] lg:h-[600px] sxl:h-[700px] xl:h-[800px] xxl:h-[950px] vxl:h-[850px] flex flex-col items-center justify-center sm:py-10 ssm:py-24 px-6 xs:px-8 sm:px-10 md:px-12 lg:px-20 sxl:px-32 xxl:px-24  relative ">
      {/* Background video  */}
      <div>
        {/* => Above 1024px  */}
        <div className="w-full h-full hidden lg:inline absolute top-0 left-0 z-[2] ">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/tokengate-lg.mp4" type="video/mp4" />
          </video>
        </div>
        {/* => Below 1024px */}
        <div className="w-full h-full lg:hidden inline absolute top-0 left-0 z-[2] ">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/tokengate-sm.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      {/* => Content  */}
      <div className="w-full flex flex-col items-start justify-start gap-10  lg:gap-16 z-[10]">
        <h1 className="w-full sm:w-[85%] md:w-[75%] lg:w-full text-left text-white font-medium sm:font-bold text-[45px] sm:text-[60px] md:text-[75px] mxl:text-[80px] xxl:text-[120px]  leading-[48px] sm:leading-[63px] md:leading-[77px] mxl:leading-[82px] xxl:leading-[125px]">
          Integra un tokengate nel tuo store con Brots{" "}
        </h1>
        <div className="w-full flex flex-col items-start justify-start gap-4 lg:gap-6">
          <p className="text-left text-[22px] sm:text-[26px] mxl:text-[30px] xxl:text-[34px] leading-[25px] sm:leading-[28px] mxl:leading-[32px] xxl:leading-[37px] text-white font-medium ">
            Permetti ai tuoi clienti di connettere o creare un wallet in un
            click, con la tecnologia di Brots per sbloccare un’esperienza di
            shopping unica.
          </p>
          <p className="text-left font-medium text-[16px] sm:text-[20px]  mxl:text-[22px] xxl:text-[34px] leading-[19px] sm:leading-[22px] mxl:leading-[27px] xxl:leading-[37px] text-mercury ">
            Con una tokengate puoi riconoscere e premiare i tuoi clienti fedeli.
            <br />I possessori dell’NFT potranno acquistare prodotti esclusivi o
            in anteprima, partecipare a eventi e altro a cui si accede
            attraverso una sezione dedicata solo per loro.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tokengate;
