import { ShadowInnerIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";
import { useTheme } from "next-themes";
import React from "react";

type IconButtonThemeProps = React.ComponentProps<typeof IconButton> & {
  themeChanged?: IconButtonThemeProps["color"];
};

export const IconButtonTheme = ({
  children,
  themeChanged,
  ...props
}: IconButtonThemeProps) => {
  const { setTheme, theme } = useTheme();

  return (
    <IconButton
      variant={
        theme === themeChanged ||
        (themeChanged === undefined && theme == "system")
          ? "outline"
          : "soft"
      }
      radius="full"
      color={themeChanged || "ruby"}
      onClick={() => {
        setTheme(`${themeChanged === undefined ? "system" : themeChanged}`);
      }}
      {...props}
    >
      <ShadowInnerIcon width="18" height="18" />
      {children}
    </IconButton>
  );
};
