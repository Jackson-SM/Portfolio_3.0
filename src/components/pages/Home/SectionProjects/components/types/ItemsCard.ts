export type ItemsCard = {
  title: string;
  description: string;
  link: string;
  steps: string[];
  status: "Em Desenvolvimento" | "Concluído";
  favorited: boolean;
  stacks: React.ReactNode[];
};
