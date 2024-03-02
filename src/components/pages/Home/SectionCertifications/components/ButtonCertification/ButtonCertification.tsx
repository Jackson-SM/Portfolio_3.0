import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Slottable } from "@radix-ui/react-slot";
import { Poppins } from "next/font/google";
import { ComponentProps } from "react";
import * as Styles from "./styles";

type ButtonCertificationTypes = ComponentProps<
  typeof Styles.ButtonCertification
> & { asChild?: boolean };

const poppins = Poppins({ weight: "400", subsets: ["latin"] });
export const ButtonCertification = ({
  children,
  asChild,
  ...props
}: ButtonCertificationTypes) => {
  const Component = asChild
    ? Styles.ButtonCertificationSlot
    : Styles.ButtonCertification;

  return (
    <Component {...props} className={poppins.className}>
      <Slottable>{children}</Slottable>
      <ArrowTopRightIcon height="1.15rem" width="1.15rem" />
    </Component>
  );
};
