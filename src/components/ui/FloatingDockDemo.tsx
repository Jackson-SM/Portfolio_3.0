import { FloatingDock } from "@/components/ui/FloatingDock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import { HoverThemeButton } from "../HoverThemeButton/HoverThemeButton";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Themes",
      icon: (
        <HoverThemeButton
          variant="soft"
          radius="full"
          className="h-full cursor-pointer w-full"
        />
      ),
      href: "#",
    },
  ];
  return (
    <div className="flex items-center justify-center w-full fixed mt-16 z-10">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
