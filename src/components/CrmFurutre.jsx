import React from "react";

const CrmFurutre = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-10 ssm:py-16 mxl:py-28 px-4 ssm:px-6 lg:px-8  xxl:px-40 bg-black">
      <div className="w-full grid lg:grid-cols-1 mxl:grid-cols-[1.3fr_0.7fr] gap-12 ssm:gap-16 mxl:gap-4">
        <div className="w-full flex flex-col items-start justify-start gap-5 ssm:gap-8 xxl:gap-12">
          <h2 className="text-[50px] ssm:text-[65px] xxl:text-[100px] leading-[50px] ssm:leading-[63px] xxl:leading-[100px] text-white font-medium ssm:font-bold text-left">
            Il futuro del CRM
          </h2>
          <h3 className="lg:w-[65%] mxl:w-[80%] xxl:w-[75%] text-left text-mercury text-[32px] ssm:text-[50px] xxl:text-[60px] leading-[32px] ssm:leading-[51px] xxl:leading-[61px]">
            Una porta d’accesso ad un’esperienza di shopping mai vista prima.
          </h3>
          <div className="lg:w-full flex flex-col items-start justify-start gap-4 xxl:gap-8">
            <h4 className="text-left text-white text-[30px]  leading-[31px] font-bold">
              Riconosci e premia i tuoi clienti fedeli
            </h4>
            <p className="lg:w-[65%] mxl:w-[95%] xxl:w-[75%] text-left text-softPeach text-[16px] ssm:text-[20px] leading-[19px] ssm:leading-[21px] ">
              Incentivate le comunità e mantenetele affamate del vostro marchio.
              Offrite ai possessori di token l’accesso anticipato ai drop o
              l’accesso esclusivo a merch in edizione limitata, esperienze e
              altro ancora quando collegano un portafoglio al vostro negozio.
            </p>
            <p className="lg:w-[65%] mxl:w-[95%] xxl:w-[75%] text-left text-softPeach text-[16px] ssm:text-[20px] leading-[19px] ssm:leading-[21px]">
              Aumenta il valore medio del carrello dei tuoi clienti offrendo
              offerte irrununciabili ai possessori degli NFT al momento del
              checkout.
            </p>
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-4 xxl:gap-8">
            <h4 className="text-left text-white text-[30px]  leading-[31px] font-bold">
              Unisci le community e collaborare con altri brand
            </h4>
            <p className="lg:w-[65%] mxl:w-[95%] text-left text-softPeach text-[16px] ssm:text-[20px] leading-[19px] ssm:leading-[21px] ">
              Rilasciate prodotti dedicati alle comunità che si riuniscono
              dietro il vostro marchio.
              <br />
              Invitate e coinvolgete nuovo pubblico quando collaborate con altri
              creatori per un momento virale.
            </p>
          </div>
        </div>
        <div className="w-full flex items-center mxl:items-start vxl:items-center justify-center mxl:justify-end ">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-[320px] ssm:w-[425px] h-[320px] ssm:h-[425px]  xxl:w-[576px] xxl:h-[576px] rounded-xl overflow-hidden"
          >
            <source src="/videos/crm-future.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default CrmFurutre;
