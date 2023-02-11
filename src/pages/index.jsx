import CrmFurutre from "@/components/CrmFurutre";
import Hero from "@/components/Hero";
import Tokengate from "@/components/Tokengate";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-start b ">
      <Hero />
      <CrmFurutre />
      <Tokengate />
    </div>
  );
}
