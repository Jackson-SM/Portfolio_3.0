import { FaConnectdevelop } from "react-icons/fa";
import { Letter } from "../Letter/Letter";
import * as Styled from "./styles";

export const Logo = () => {
  return (
    <Styled.Logo as="h1">
      <Letter gradient="primaryToSecondary">Jackson</Letter>
      <FaConnectdevelop />
    </Styled.Logo>
  );
};
