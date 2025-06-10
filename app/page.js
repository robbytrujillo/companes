import Image from "next/image";

import DataImage from '@/public/data';

import HeroInfo from "@/components/HeroInfo";

import Link from "next/link";

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
        <Image src={DataImage.Hero} alt="Hero Image" className="rounded-t-2xl" priority/>
        <HeroInfo />
      </div>
      {/* Hero Image End */}

      {/* Service Start */}
      <div className="container mx-auto px-4 w-full max-w-7xl grid lg:grid-cols-3 mt-32 gap-10 md:grid-cols-2 grid-cols-1">
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
          <i className="ri-star-s-fill ri-3x text-slate-700"></i>
          <p className="font-semibold text-2xl/normal mb-2">Memberikan Harga Terbaik</p>
          <p className="text-base/loose">lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed velit augue. Nam ultrices pellentesque nulla sed fringilla. Etiam at pharetra sapien, at vulputate enim. </p>
        </div>
      </div>
      {/* Service End */}

      {/* Project Start */}
      <div className="container mx-auto px-4 w-full max-w-7xl mt-32">
        <h1 className="text-4xl/normal text-center font-semibold">Project Kami</h1>
        <p className="text-base/loose text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed velit augue</p>
        
        <div className="mt-20 grid grid-cols-3 gap-10">
          <div className="shadow-2xl p-4 rounded-2xl">
            <Image src={DataImage.Proyek1} alt="Project Image" className="rounded-2xl" />
            <h1 className="mt-6 mb-3 text-2xl font-semibold">Project Pertama</h1>
            <p className="text-base/loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed velit augue.</p>
            <div className="mt-6 mb-3">
              <Link href={"#"} className="bg-slate-700 text-white text-center p-3 rounded-3xl hover:bg-slate-600 cursor-pointer">Lihat Website</Link>
            </div>
          </div>
          <div className="shadow-2xl p-4 rounded-2xl">
            <Image src={DataImage.Proyek2} alt="Project Image" className="rounded-2xl" />
            <h1 className="mt-6 mb-3 text-2xl font-semibold">Project Kedua</h1>
            <p className="text-base/loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed velit augue.</p>
            <div className="mt-6 mb-3">
              <Link href={"#"} className="bg-slate-700 text-white text-center p-3 rounded-3xl hover:bg-slate-600 cursor-pointer">Lihat Website</Link>
            </div>
          </div>
          <div className="shadow-2xl p-4 rounded-2xl">
            <Image src={DataImage.Proyek3} alt="Project Image" className="rounded-2xl" />
            <h1 className="mt-6 mb-3 text-2xl font-semibold">Project Ketiga</h1>
            <p className="text-base/loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed velit augue.</p>
            <div className="mt-6 mb-3">
              <Link href={"#"} className="bg-slate-700 text-white text-center p-3 rounded-3xl hover:bg-slate-600 cursor-pointer">Lihat Website</Link>
            </div>
          </div>
          <div className="shadow-2xl p-4 rounded-2xl">
            <Image src={DataImage.Proyek4} alt="Project Image" className="rounded-2xl" />
            <h1 className="mt-6 mb-3 text-2xl font-semibold">Project Keempat</h1>
            <p className="text-base/loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed velit augue.</p>
            <div className="mt-6 mb-3">
              <Link href={"#"} className="bg-slate-700 text-white text-center p-3 rounded-3xl hover:bg-slate-600 cursor-pointer">Lihat Website</Link>
            </div>
          </div>
          <div className="shadow-2xl p-4 rounded-2xl">
            <Image src={DataImage.Proyek5} alt="Project Image" className="rounded-2xl" />
            <h1 className="mt-6 mb-3 text-2xl font-semibold">Project Kelima</h1>
            <p className="text-base/loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed velit augue.</p>
            <div className="mt-6 mb-3">
              <Link href={"#"} className="bg-slate-700 text-white text-center p-3 rounded-3xl hover:bg-slate-600 cursor-pointer">Lihat Website</Link>
            </div>
          </div>
        </div>
      </div>
      {/* Project End */}
    </>
    
  );
}
