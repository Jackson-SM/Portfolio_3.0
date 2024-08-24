import { globalStyles } from "@/styles/global";
import blueTheme from "@/themes/blueTheme";
import jadeTheme from "@/themes/jadeTheme";
import purpleTheme from "@/themes/purpleTheme";
import { themes } from "@/themes/themes";
import tomatoTheme from "@/themes/tomatoTheme";
import yellowTheme from "@/themes/yellowTheme";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <ThemeProvider
      attribute="class"
      themes={themes}
      enableColorScheme={false}
      value={{
        yellow: yellowTheme.className,
        blue: blueTheme.className,
        jade: jadeTheme.className,
        tomato: tomatoTheme.className,
        purple: purpleTheme.className,
      }}
    >
      <Theme appearance="dark">
        <Component {...pageProps} />
      </Theme>
    </ThemeProvider>
  );
}
