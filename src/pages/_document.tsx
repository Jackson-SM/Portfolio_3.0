import React from "react";
import { getCssText } from "@/config/stitches.config";
import { Html, Head, Main, NextScript } from "next/document";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body className={poppins.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
