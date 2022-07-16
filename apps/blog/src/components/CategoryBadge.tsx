import { Button, ButtonProps } from '@nextui-org/react';

interface Props extends ButtonProps {}

export function CategoryBadge({ children, ...props }: Props) {
  return (
    <Button
      onClick={e => {
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
