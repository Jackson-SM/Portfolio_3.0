import React from "react";
import Head from "next/head";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Portfólio Jackson Magalhães" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${poppins.className}`}>
        <h1>Portfolio</h1>
      </main>
    </>
  );
}
