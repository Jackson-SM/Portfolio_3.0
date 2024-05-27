import { HeadingTitle } from "@/components/HeadingTitle/Heading";
import { Letter } from "@/components/Letter/Letter";
import { ProjectDoesntExist } from "@/components/ProjectDoesntExist/ProjectDoesntExist";
import { projects } from "@/data/projects";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  const project = projects.find(
    (project) => project.slug === router.query.project,
  );

  if (project === undefined) {
    return <ProjectDoesntExist />;
  }

  return (
    <HeadingTitle size="7">
      Project New: <Letter>{router.query.project}</Letter>
    </HeadingTitle>
  );
}
