/* eslint-disable react/jsx-key */
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { INFORMATION } from "./constants";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
 const year = new Date().getFullYear();

 return (
  <>
   <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta content="grover" name="author" />
    <meta content="Grover LLanos" name="copyright" />
    <meta />
    <title>Mi tienda online - TO</title>
   </Head>
   <div>
    {/* Your banner */}
    <div className="  bg-[#212830]">
     <div className="mx-auto container flex flex-col lg:flex-row lg:justify-evenly py-8">
      <div className=" ">
       <Image src={INFORMATION.banner} height={400} width={407} alt="NIKE" />
      </div>
      <div className=" text-center lg:text-left ">
       <h3 className=" text-[#D543EE] text-2xl lg:text-8xl font-bold">BLACK</h3>
       <h1 className=" text-white text-3xl lg:text-9xl font-bold">FRIDAY</h1>
       <span className=" mb-10 mt-4 before:block before:absolute before:-inset-1  before:bg-[#D543EE] relative inline-block">
        <span className="relative text-white text-2xl lg:text-6xl font-semibold">
         OFERTAS ESPECIALES
        </span>
       </span>
       <div className=" mx-auto lg:mx-0 py-2 px-4 bg-[#D543EE] w-[160px] rounded-lg text-white">
        ORDENA AHORA
       </div>
      </div>
     </div>
    </div>
    {/* End banner */}
    <div className="  mx-auto container relative -top-2 lg:-top-6">
     <div className="flex flex-row items-center gap-2 lg:gap-6">
      <div>
       <Image src={INFORMATION.avatar} width="150" height="150" alt="Logo" />
      </div>
      <div>
       <h1 className=" text-2xl text-slate-700 font-semibold">
        {INFORMATION.title}
       </h1>
       <p>{INFORMATION.description}</p>
       <div className=" mt-2 flex  gap-2">
        {INFORMATION.social.map((social) => (
         <Link key={social?.name} href={social?.link}>
          <Image src={social.icon} alt={social.name} width={30} height={30} />
         </Link>
        ))}
       </div>
      </div>
     </div>
    </div>
   </div>
   <Component {...pageProps} />
   <div className=" mt-20 py-10 w-full">
    <div className="text-center">
     © Copyright <span>{year}</span>. Hecho con ❤ para
     <Link href="https://versel.pe"> Versel</Link>
    </div>
   </div>
  </>
 );
};

export default App;
