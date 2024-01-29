import * as Styles from "./styles";

type StacksProps = React.ComponentProps<typeof Styles.Stack> & {
  title: string;
  src: string;
  color: string;
};

export const Stack = ({ children, ...props }: StacksProps) => {
  const { title, src, color } = props;

  return (
    <Styles.Stack
      {...props}
      css={{
        "&:hover": {
          [`& ${Styles.StackImage}`]: {
            boxShadow: `0 5px 20px 0px ${color}`,
          },
        },
      }}
    >
      <Styles.StackImage
        src={src}
        alt="reactjs"
        width={40}
        height={40}
        css={{
          background: `${color}`,
        }}
      />
      {title}
      {children}
    </Styles.Stack>
  );
};
