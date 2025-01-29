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
        className="group flex items-center gap-2"
        {...props}
      >
        {props.children}
        <svg
          className="w-4 h-4 opacity-0 transition-opacity group-hover:opacity-50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      </a>
    </div>
  );
}

function headerStyle(type: HeaderType) {
  switch (type) {
    case 'h1':
      return 'text-4xl font-bold my-12';
    case 'h2':
      return 'text-2xl font-bold my-8';
    case 'h3':
      return 'text-xl font-bold my-6';
    case 'h4':
      return 'text-lg font-bold my-4';
    case 'h5':
      return 'text-base font-bold m-2';
    case 'h6':
      return 'text-sm font-bold';
    default:
      return 'text-4xl font-bold my-12';
  }
}
