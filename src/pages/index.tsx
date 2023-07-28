import React from "react";
import Head from "next/head";
import { Poppins } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { SectionHero } from "@/components/SectionHero";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio Jackson Magalhães</title>
        <meta name="description" content="Portfólio Jackson Magalhães" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={`${poppins.className}`}>
        <SectionHero />
      </main>
    </>
  );
}
