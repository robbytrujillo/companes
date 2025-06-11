import Image from "next/image";

import DataImage from '@/public/data';

import HeroInfo from "@/components/HeroInfo";

import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Title Start */}
      <div className="py-20">
        <h1 className="sm:text-6xl/tight text-5xl/tight font-bold sm:text-center text-left">
          Improve Your Lifestyle <br /> With Us
        </h1>
      </div>
      {/* Title End */}

      {/* Hero Image Start */}
      <div className="max-w-5xl mx-auto relative shadow-2xl rounded-2xl">
        <Image src={DataImage.Hero1} alt="Hero Image" className="rounded-t-2xl" priority/>
        <HeroInfo />
      </div>
      {/* Hero Image End */}

      {/* Service Start */}
      <div className="container mx-auto px-4 w-full max-w-7xl grid lg:grid-cols-3 mt-32 gap-10 md:grid-cols-2 grid-cols-1" id="service">
        <div className="shadow-2xl p-7 rounded-2xl">
          <i className="ri-money-dollar-circle-fill ri-3x text-slate-700"></i>
          <p className="font-semibold text-2xl/normal mb-2">Providing the Best Price</p>
          <p className="text-base/loose">lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed velit augue. Nam ultrices pellentesque nulla sed fringilla. Etiam at pharetra sapien, at vulputate enim. </p>
        </div>
        <div className="shadow-2xl p-7 rounded-2xl">
          <i className="ri-service-fill ri-3x text-slate-700"></i>
          <p className="font-semibold text-2xl/normal mb-2">Periodic Inspection</p>
          <p className="text-base/loose">lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed velit augue. Nam ultrices pellentesque nulla sed fringilla. Etiam at pharetra sapien, at vulputate enim. </p>
        </div>
        <div className="shadow-2xl p-7 rounded-2xl">
          <i className="ri-star-s-fill ri-3x text-slate-700"></i>
          <p className="font-semibold text-2xl/normal mb-2">Focus on Website, Mobile & IoT</p>
          <p className="text-base/loose">lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed velit augue. Nam ultrices pellentesque nulla sed fringilla. Etiam at pharetra sapien, at vulputate enim. </p>
        </div>
      </div>
      {/* Service End */}

      {/* Project Start */}
      <div className="container mx-auto px-4 w-full max-w-7xl mt-32" id="project">
        <h1 className="text-4xl/normal text-center font-semibold">Our Project</h1>
        <p className="text-base/loose text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed velit augue</p>
        
        <div className="mt-20 grid lg:grid-cols-3 gap-10 md:grid-cols-2 grid-cols-1">
          <div className="shadow-2xl p-4 rounded-2xl">
            <Image src={DataImage.Proyek1} alt="Project Image" className="rounded-2xl" />
            <h1 className="mt-6 mb-3 text-2xl font-semibold">First Project</h1>
            <p className="text-base/loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed velit augue.</p>
            <div className="mt-6 mb-3">
              <Link href={"#"} className="bg-slate-700 text-white text-center p-3 rounded-3xl hover:bg-slate-600 cursor-pointer">Lihat Website</Link>
            </div>
          </div>
          <div className="shadow-2xl p-4 rounded-2xl">
            <Image src={DataImage.Proyek2} alt="Project Image" className="rounded-2xl" />
            <h1 className="mt-6 mb-3 text-2xl font-semibold">Second Project</h1>
            <p className="text-base/loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed velit augue.</p>
            <div className="mt-6 mb-3">
              <Link href={"#"} className="bg-slate-700 text-white text-center p-3 rounded-3xl hover:bg-slate-600 cursor-pointer">Lihat Website</Link>
            </div>
          </div>
          <div className="shadow-2xl p-4 rounded-2xl">
            <Image src={DataImage.Proyek3} alt="Project Image" className="rounded-2xl" />
            <h1 className="mt-6 mb-3 text-2xl font-semibold">Third Project</h1>
            <p className="text-base/loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed velit augue.</p>
            <div className="mt-6 mb-3">
              <Link href={"#"} className="bg-slate-700 text-white text-center p-3 rounded-3xl hover:bg-slate-600 cursor-pointer">Lihat Website</Link>
            </div>
          </div>
          <div className="shadow-2xl p-4 rounded-2xl">
            <Image src={DataImage.Proyek4} alt="Project Image" className="rounded-2xl" />
            <h1 className="mt-6 mb-3 text-2xl font-semibold">Fourth Project</h1>
            <p className="text-base/loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed velit augue.</p>
            <div className="mt-6 mb-3">
              <Link href={"#"} className="bg-slate-700 text-white text-center p-3 rounded-3xl hover:bg-slate-600 cursor-pointer">Lihat Website</Link>
            </div>
          </div>
          <div className="shadow-2xl p-4 rounded-2xl">
            <Image src={DataImage.Proyek5} alt="Project Image" className="rounded-2xl" />
            <h1 className="mt-6 mb-3 text-2xl font-semibold">Fifth Project</h1>
            <p className="text-base/loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed velit augue.</p>
            <div className="mt-6 mb-3">
              <Link href={"#"} className="bg-slate-700 text-white text-center p-3 rounded-3xl hover:bg-slate-600 cursor-pointer">Lihat Website</Link>
            </div>
          </div>
        </div>
      </div>
      {/* Project End */}

      {/* Contact Start */}
      <div className="container mx-auto px-4 w-full max-w-7xl mt-32 flex items-center justify-between md:flex-row flex-col md:gap-0 gap-4" id="contact">
        <h2 className="text-3xl font-bold">Companes.</h2>
        <div className="flex gap-10">
          <Link href={"#home"}>Home</Link>
          <Link href={"#service"}>Service</Link>
          <Link href={"#project"}>Project</Link>
        </div>
        <div className="flex gap-4">
          <Link href={"#"}>
            <i className="ri-instagram-fill ri-2x"></i>
          </Link>
          <Link href={"#"}>
            <i className="ri-linkedin-fill ri-2x"></i>
          </Link>
          <Link href={"#"}>
            <i className="ri-github-fill ri-2x"></i>
          </Link>
          <Link href={"#"}>
            <i className="ri-facebook-fill ri-2x"></i>
          </Link>
        </div>
      </div>
      {/* Contact End */}
    </>
    
  );
}
