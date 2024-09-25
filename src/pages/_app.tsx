import { ThemeProviderConfig } from "@/components/themes/ThemeProviderConfig";
import { globalStyles } from "@/styles/global";
import "@radix-ui/themes/styles.css";
import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <ThemeProviderConfig>
      <Component {...pageProps} />
    </ThemeProviderConfig>
  );
}
