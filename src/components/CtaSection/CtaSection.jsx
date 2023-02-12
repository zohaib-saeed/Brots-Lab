import Image from "next/image";
import React from "react";
import Button from "../Commons/Button";
import Item1 from "./SubComps/Item1";
import Item2 from "./SubComps/Item2";
import Item3 from "./SubComps/Item3";
import PressCoverage from "./SubComps/PressCoverage";

const CtaSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-10 ssm:py-16 md:py-32 lg:py-20 mxl:py-28 px-4 ssm:px-6 lg:px-12 mxl:px-20 xxl:px-40 bg-black overflow-hidden">
      {/* => CTA Item 1 */}
      <Item1 />
      {/* => CTA Item 2  */}
      <Item2 />
      {/* CTA Item 3  */}
      <Item3 />
      {/* Press Coverage  */}
      <PressCoverage />
    </div>
  );
};

export default CtaSection;
