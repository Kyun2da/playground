import assert from 'assert';
import { useCallback, useRef } from 'react';

type HeaderType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface Props extends React.HTMLProps<HTMLAnchorElement> {
  type: HeaderType;
}

export function MDXHeader({ type, ...props }: Props) {
  const targetSectionRef = useRef<HTMLAnchorElement>(null);

  assert(typeof props.children === 'string', 'children must be string');

  const onClick = useCallback(() => {
    if (targetSectionRef.current) {
      targetSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className={headerStyle(type)}>
      <a
        href={`#${props.children}`}
        id={props.children}
        ref={targetSectionRef}
        onClick={onClick}
        {...props}
      />
    </div>
  );
}

function headerStyle(type: HeaderType) {
  switch (type) {
    case 'h1':
      return 'text-4xl font-bold my-12 cursor-pointer';
    case 'h2':
      return 'text-2xl font-bold my-8 cursor-pointer';
    case 'h3':
      return 'text-xl font-bold my-6 cursor-pointer';
    case 'h4':
      return 'text-lg font-bold my-4 cursor-pointer';
    case 'h5':
      return 'text-base font-bold m-2 cursor-pointer';
    case 'h6':
      return 'text-sm font-bold cursor-pointer';
    default:
      return 'text-4xl font-bold my-12 cursor-pointer';
  }
}
