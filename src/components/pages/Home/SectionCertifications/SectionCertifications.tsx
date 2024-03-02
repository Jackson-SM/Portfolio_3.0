import { HeadingTitle } from "@/components/HeadingTitle/Heading";
import { Box, Grid } from "@radix-ui/themes";
import { ButtonCertification } from "./components/ButtonCertification/ButtonCertification";
import * as Styles from "./styles";

export const SectionCertifications = () => {
  return (
    <Styles.SectionCertifications>
      <HeadingTitle>Certifications</HeadingTitle>
      <Grid columns="auto" gap="3" width="auto">
        <Box>
          <ButtonCertification asChild>
            <a href="#cert1">Certificado 1</a>
          </ButtonCertification>
        </Box>
        <Box>
          <ButtonCertification>Certificado 2</ButtonCertification>
        </Box>
        <Box>
          <ButtonCertification>Certificado 3</ButtonCertification>
        </Box>
      </Grid>
    </Styles.SectionCertifications>
  );
};
