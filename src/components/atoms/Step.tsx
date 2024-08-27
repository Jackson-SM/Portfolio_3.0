import { CheckIcon } from "../icons/CheckIcon";

type StepProps = React.ComponentProps<"div"> & {
  title: string;
};

export const Step = ({ title }: StepProps) => {
  return (
    <div className="flex items-center gap-2">
      <CheckIcon />
      <p className="text-sm pt-1">{title}</p>
    </div>
  );
};
