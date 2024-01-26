import * as Styles from "./StacksListStyle";

export const StacksList = () => {
  return (
    <Styles.Container>
      <Styles.ImageIcon
        src="/icons-libs-frameworks/nestjs.svg"
        alt="nestjs"
        style={{ top: "-5%", left: "45%" }}
      />
      <Styles.ImageIcon
        src="/icons-langs/typescript.svg"
        alt="typescript"
        style={{ top: "45%", left: "95%" }}
      />
      <Styles.ImageIcon
        src="/icons-langs/python.svg"
        alt="python"
        style={{ top: "95%", left: "45%" }}
      />
      <Styles.ImageIcon
        src="/icons-libs-frameworks/tailwindcss.svg"
        alt="tailwind"
        style={{ top: "45%", left: "-5%" }}
      />
    </Styles.Container>
  );
};
