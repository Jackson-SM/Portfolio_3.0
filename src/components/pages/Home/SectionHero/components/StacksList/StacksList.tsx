import { keyframes } from "@/config/stitches.config";
import * as Styles from "./StacksListStyle";

import nodejsIcon from "@/assets/icons-langs/nodejs.svg";
import nestjsIcon from "@/assets/icons-libs-frameworks/nestjs.svg";
import reactIcon from "@/assets/icons-libs-frameworks/react.svg";
import vuejsIcon from "@/assets/icons-libs-frameworks/vuejs.svg";

const stacksAnimations = keyframes({
  "0%": {
    filter:
      "drop-shadow(0 0 10px $colors$primaryDark) grayscale(80%) blur(2px)",
    opacity: 0.5,
  },
  "100%": {
    filter: "drop-shadow(0 0 10px $colors$primaryDark) grayscale(0%) blur(0px)",
    opacity: 1,
  },
});

export const StacksList = () => {
  return (
    <Styles.Container>
      <Styles.ImageIcon
        src={nestjsIcon}
        alt="nestjs"
        style={{
          top: "-5%",
          left: "45%",
          animation: `${stacksAnimations} 2s  ease-in-out`,
          animationFillMode: "forwards",
          animationDelay: "1s",
        }}
      />
      <Styles.ImageIcon
        src={nodejsIcon}
        alt="nodejs"
        style={{
          top: "45%",
          left: "95%",
          animation: `${stacksAnimations} 2s  ease-in-out`,
          animationFillMode: "forwards",
          animationDelay: "3s",
        }}
      />
      <Styles.ImageIcon
        src={vuejsIcon}
        alt="vuejs"
        style={{
          top: "95%",
          left: "45%",
          animation: `${stacksAnimations} 2s  ease-in-out`,
          animationFillMode: "forwards",
          animationDelay: "5s",
        }}
      />
      <Styles.ImageIcon
        src={reactIcon}
        alt="reactjs"
        style={{
          top: "45%",
          left: "-5%",
          animation: `${stacksAnimations} 2s  ease-in-out`,
          animationFillMode: "forwards",
          animationDelay: "7s",
        }}
      />
    </Styles.Container>
  );
};
