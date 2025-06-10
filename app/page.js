import Image from "next/image";

import DataImage from '@/public/data';

import HeroInfo from "@/components/HeroInfo";

export default function Home() {
  return (
    <>
      {/* Title Start */}
      <div className="py-20">
        <h1 className="sm:text-6xl/tight text-5xl/tight sm:text-center text-left">
          Tingkatkan Gaya Hidup Anda <br /> Bersama Kami
        </h1>
      </div>
      {/* Title End */}

      {/* Hero Image Start */}
      <div className="max-w-5xl mx-auto relative">
        <Image src={DataImage.Hero} alt="Hero Image" />
        <HeroInfo />
      </div>
      {/* Hero Image End */}
    </>
    
  );
}
