import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/lazy";

const CrmFurutre = () => {
  // State to check the window. The ReactPlayer will only be rendered when there is windo available. It is done to the hydration error given by the ReacPlayer due to Next.js pre-rendering feature.
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <div className="w-full flex flex-col items-center justify-center py-16 px-16 bg-black">
      <div className="w-full flex flex-col items-start justify-start gap-8">
        <div className="w-full flex flex-col items-start justify-start gap-8">
          <h2 className="text-[65px] laeding-[66px] text-white font-bold text-left">
            Il futuro del CRM
          </h2>
          <h3 className="w-[50%] text-left text-mercury text-[50px] leading-[51px]">
            Una porta d’accesso ad un’esperienza di shopping mai vista prima.
          </h3>
          <div className="w-full flex flex-col items-start justify-start gap-4">
            <h4 className="text-left text-white text-[30px]  leading-[31px] font-bold">
              Riconosci e premia i tuoi clienti fedeli
            </h4>
            <p className="w-[50%] text-left text-softPeach text-[20px] leading-[21px] ">
              Incentivate le comunità e mantenetele affamate del vostro marchio.
              Offrite ai possessori di token l’accesso anticipato ai drop o
              l’accesso esclusivo a merch in edizione limitata, esperienze e
              altro ancora quando collegano un portafoglio al vostro negozio.
            </p>
            <p className="w-[50%] text-left text-softPeach text-[20px] leading-[21px] ">
              Aumenta il valore medio del carrello dei tuoi clienti offrendo
              offerte irrununciabili ai possessori degli NFT al momento del
              checkout.
            </p>
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-4">
            <h4 className="text-left text-white text-[30px]  leading-[31px] font-bold">
              Unisci le community e collaborare con altri brand
            </h4>
            <p className="w-[50%] text-left text-softPeach text-[20px] leading-[21px] ">
              Rilasciate prodotti dedicati alle comunità che si riuniscono
              dietro il vostro marchio.
              <br />
              Invitate e coinvolgete nuovo pubblico quando collaborate con altri
              creatori per un momento virale.
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-center ">
          {hasWindow && (
            <div className="w-[425px] h-[425px] rounded-lg overflow-hidden relative">
              <ReactPlayer
                className="react-player"
                controls={false}
                playing
                url="/videos/crm-future.mp4"
                loop
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CrmFurutre;
