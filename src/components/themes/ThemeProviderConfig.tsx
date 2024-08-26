import blueTheme from "@/themes/blueTheme";
import jadeTheme from "@/themes/jadeTheme";
import purpleTheme from "@/themes/purpleTheme";
import { themes } from "@/themes/themes";
import tomatoTheme from "@/themes/tomatoTheme";
import yellowTheme from "@/themes/yellowTheme";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";

type ThemeProviderConfigProps = React.ComponentProps<typeof ThemeProvider>;

export const ThemeProviderConfig = ({
  children,
  ...props
}: ThemeProviderConfigProps) => {
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
      {...props}
    >
      <Theme appearance="dark">{children}</Theme>
    </ThemeProvider>
  );
};
