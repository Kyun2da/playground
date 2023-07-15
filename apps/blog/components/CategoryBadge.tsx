import { Button, ButtonProps } from '@nextui-org/button';

interface Props extends ButtonProps {}

export function CategoryBadge({ children, ...props }: Props) {
  return (
    <Button
      onClick={(e: any) => {
        e.preventDefault();
      }}
      color="primary"
      flat
      rounded
      {...props}
    >
      {children}
    </Button>
  );
}
