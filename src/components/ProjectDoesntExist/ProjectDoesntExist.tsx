import { HeadingTitle } from "../HeadingTitle/Heading";
import { Letter } from "../Letter/Letter";

export const ProjectDoesntExist = () => {
  return (
    <div>
      <HeadingTitle size="7">
        Project <Letter>Doesnt Exist</Letter>, Try other slug
      </HeadingTitle>
    </div>
  );
};
