import { styled } from "@/config/stitches.config";
import { Slot } from "@radix-ui/react-slot";

const styleButtonCertification = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$4",
  width: "16rem",
  height: "45px",
  fontSize: "$2",

  background: "transparent",
  border: "1px solid $backgroundGray",
  borderRadius: "4px",

  cursor: "pointer",

  color: "$text",

  transition: "background ease 130ms",

  "&:hover": {
    background: "$backgroundGray",
  },
};

export const ButtonCertification = styled("button", styleButtonCertification);
export const ButtonCertificationSlot = styled(Slot, {
  ...styleButtonCertification,
  textDecoration: "none",
});
