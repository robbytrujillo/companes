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
        <Image src={DataImage.Hero} alt="Hero Image" priority/>
        <HeroInfo />
      </div>
      {/* Hero Image End */}

      {/* Service Start */}
      <div>
        <div>
          <i className="ri-money-dollar-circle-fill ri-3x text-slate-700"></i>
          <p className="font-semibold text-2xl/normal mb-2">Memberikan Harga Terbaik</p>
          <p className="text-base/loose">lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed velit augue. Nam ultrices pellentesque nulla sed fringilla. Etiam at pharetra sapien, at vulputate enim. </p>
        </div>
        <div>
          <i className="ri-service-fill ri-3x text-slate-700"></i>
          <p className="font-semibold text-2xl/normal mb-2">Memberikan Harga Terbaik</p>
          <p className="text-base/loose">lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed velit augue. Nam ultrices pellentesque nulla sed fringilla. Etiam at pharetra sapien, at vulputate enim. </p>
        </div>
        <div>
          <i className="ri-money-dollar-circle-fill ri-3x text-slate-700"></i>
          <p className="font-semibold text-2xl/normal mb-2">Memberikan Harga Terbaik</p>
          <p className="text-base/loose">lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed velit augue. Nam ultrices pellentesque nulla sed fringilla. Etiam at pharetra sapien, at vulputate enim. </p>
        </div>
      </div>
      {/* Service End */}
    </>
    
  );
}
