import { Navbar } from "@/components/Navbar";
import { SectionAboutMe } from "@/components/pages/AboutMe/SectionAboutMe";
import { Poppins } from "next/font/google";
import Head from "next/head";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function AboutMe() {
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
        <SectionAboutMe />
      </main>
    </>
  );
}
