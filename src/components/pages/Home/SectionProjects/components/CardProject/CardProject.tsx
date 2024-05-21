import { ImageProject } from "../ImageProject/ImageProject";
import { InfoProject } from "../InfoProject/InfoProject";
import * as Styles from "./styles";

export const CardProject = () => {
  return (
    <Styles.CardProject>
      <ImageProject />
      <InfoProject />
    </Styles.CardProject>
  );
};
