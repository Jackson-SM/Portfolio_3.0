import { Navbar } from "@/components/Navbar";
import { SectionHero } from "@/components/pages/Home/SectionHero";
import { SectionProjects } from "@/components/pages/Home/SectionProjects/SectionProjects";
import { SectionStacksV2 } from "@/components/pages/Home/SectionStacksV2/SectionStacksV2";
import { Poppins } from "next/font/google";
import Head from "next/head";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Jackson Magalhães</title>
        <meta name="description" content="Portfólio Jackson Magalhães" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={`${poppins.className}`}>
        <SectionHero />
        <SectionStacksV2 />
        <SectionProjects />
      </main>
    </>
  );
}
