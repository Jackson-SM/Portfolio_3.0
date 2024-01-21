import { themes } from "@/themes/themes";
import { DragHandleDots2Icon } from "@radix-ui/react-icons";
import { Grid, IconButton, Popover } from "@radix-ui/themes";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IconButtonTheme } from "./IconButtonTheme";

type ThemeButtonProps = React.ComponentProps<typeof IconButton>;

const themeToColorMap: {
  [key: string]: ThemeButtonProps["color"];
} = {
  system: "ruby", // Substitua 'sky' pela cor apropriada para o tema claro
  blue: "blue", // Substitua 'violet' pela cor apropriada para o tema escuro
  yellow: "yellow", // Substitua 'violet' pela cor apropriada para o tema escuro
  jade: "jade",
  tomato: "tomato",
  purple: "purple",
};

export const HoverThemeButton = ({ children, ...props }: ThemeButtonProps) => {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const color = themeToColorMap[theme as keyof typeof themeToColorMap];

  return (
    <Popover.Root>
      <Popover.Trigger>
        <IconButton color={color} {...props}>
          <DragHandleDots2Icon width="18" height="18" />
        </IconButton>
      </Popover.Trigger>
      <Popover.Content>
        <Grid columns="4" gap="3" width="auto">
          <IconButtonTheme themeChanged={undefined} />
          {themes.map((colorTheme) => {
            return (
              <IconButtonTheme key={colorTheme} themeChanged={colorTheme} />
            );
          })}
        </Grid>
        {children}
      </Popover.Content>
    </Popover.Root>
  );
};
