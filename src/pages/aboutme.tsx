import { FloatingDockDemo } from "@/components/ui/FloatingDockDemo";
import { TopicsDemo } from "@/components/ui/TopicsDemo";
import { Poppins } from "next/font/google";
import Head from "next/head";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function Aboutme() {
  return (
    <>
      <Head>
        <title>About me</title>
        <meta name="description" content="Portfólio Jackson Magalhães" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FloatingDockDemo />
      <main className={`${poppins.className}`}>
        <TopicsDemo />
      </main>
    </>
  );
}
