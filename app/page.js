import Image from "next/image";

import DataImage from '@/public/data';

import HeroInfo from "@/components/HeroInfo";

import Link from "next/link";

import * as motion from "motion/react-client"

export default function Home() {
  return (
    <>
      {/* Title Start */}
      <motion.div className="py-20" initial={{ opacity: 0, y: 50, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }}>
        <h1 className="sm:text-6xl/tight text-5xl/tight font-bold sm:text-center text-center">
          Improve Your Lifestyle <br /> With Us
        </h1>
      </motion.div>
      {/* Title End */}

      {/* Hero Image Start */}
      <div className="max-w-5xl mx-auto relative shadow-2xl rounded-2xl">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <Image src={DataImage.Hero1} alt="Hero Image" className="rounded-t-2xl" priority/>
        </motion.div>
        <HeroInfo />
      </div>
      {/* Hero Image End */}

      {/* Service Start */}
      <div className="container mx-auto px-4 w-full max-w-7xl grid lg:grid-cols-3 mt-32 gap-10 md:grid-cols-2 grid-cols-1" id="service">
        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} className="shadow-2xl p-7 rounded-2xl text-center">
          <i className="ri-money-dollar-circle-fill ri-3x text-slate-700"></i>
          <p className="font-semibold text-2xl/normal mb-2">Providing the Best Price</p>
          <p className="text-base/loose">lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed velit augue. Nam ultrices pellentesque nulla sed fringilla. Etiam at pharetra sapien, at vulputate enim. </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} viewport={{ once:true }} className="shadow-2xl p-7 rounded-2xl text-center">
          <i className="ri-service-fill ri-3x text-slate-700"></i>
          <p className="font-semibold text-2xl/normal mb-2">Periodic Inspection</p>
          <p className="text-base/loose">lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed velit augue. Nam ultrices pellentesque nulla sed fringilla. Etiam at pharetra sapien, at vulputate enim. </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} viewport={{ once:true }} className="shadow-2xl p-7 rounded-2xl text-center">
          <i className="ri-star-s-fill ri-3x text-slate-700"></i>
          <p className="font-semibold text-2xl/normal mb-2">Focus on Website, Mobile & IoT</p>
          <p className="text-base/loose">lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed velit augue. Nam ultrices pellentesque nulla sed fringilla. Etiam at pharetra sapien, at vulputate enim. </p>
        </motion.div>
      </div>
      {/* Service End */}

      {/* Project Start */}
      <div className="container mx-auto px-4 w-full max-w-7xl mt-32 text-center" id="project">
        <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} className="text-4xl/normal text-center font-semibold">Our Project</motion.h1>
        <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.2 }} className="text-base/loose text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed velit augue</motion.p>
        
        <div className="mt-20 grid lg:grid-cols-3 gap-10 md:grid-cols-2 grid-cols-1">
          <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} className="shadow-2xl p-4 rounded-2xl">
            <Image src={DataImage.Proyek1} alt="Project Image" className="rounded-2xl" />
            <h1 className="mt-6 mb-3 text-2xl font-semibold">First Project</h1>
            <p className="text-base/loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed velit augue.</p>
            <div className="mt-6 mb-3">
              <Link href={"#"} className="bg-slate-700 text-white text-center p-3 rounded-3xl hover:bg-slate-600 cursor-pointer">Lihat Website</Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="shadow-2xl p-4 rounded-2xl">
            <Image src={DataImage.Proyek2} alt="Project Image" className="rounded-2xl" />
            <h1 className="mt-6 mb-3 text-2xl font-semibold">Second Project</h1>
            <p className="text-base/loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed velit augue.</p>
            <div className="mt-6 mb-3">
              <Link href={"#"} className="bg-slate-700 text-white text-center p-3 rounded-3xl hover:bg-slate-600 cursor-pointer">Lihat Website</Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="shadow-2xl p-4 rounded-2xl">
            <Image src={DataImage.Proyek3} alt="Project Image" className="rounded-2xl" />
            <h1 className="mt-6 mb-3 text-2xl font-semibold">Third Project</h1>
            <p className="text-base/loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed velit augue.</p>
            <div className="mt-6 mb-3">
              <Link href={"#"} className="bg-slate-700 text-white text-center p-3 rounded-3xl hover:bg-slate-600 cursor-pointer">Lihat Website</Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} className="shadow-2xl p-4 rounded-2xl">
            <Image src={DataImage.Proyek4} alt="Project Image" className="rounded-2xl" />
            <h1 className="mt-6 mb-3 text-2xl font-semibold">Fourth Project</h1>
            <p className="text-base/loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed velit augue.</p>
            <div className="mt-6 mb-3">
              <Link href={"#"} className="bg-slate-700 text-white text-center p-3 rounded-3xl hover:bg-slate-600 cursor-pointer">Lihat Website</Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="shadow-2xl p-4 rounded-2xl">
            <Image src={DataImage.Proyek5} alt="Project Image" className="rounded-2xl" />
            <h1 className="mt-6 mb-3 text-2xl font-semibold">Fifth Project</h1>
            <p className="text-base/loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed velit augue.</p>
            <div className="mt-6 mb-3">
              <Link href={"#"} className="bg-slate-700 text-white text-center p-3 rounded-3xl hover:bg-slate-600 cursor-pointer">Lihat Website</Link>
            </div>
          </motion.div>
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
