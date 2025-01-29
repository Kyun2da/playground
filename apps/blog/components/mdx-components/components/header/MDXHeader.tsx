import assert from 'assert';
import { useCallback, useRef } from 'react';

type HeaderType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface Props extends React.HTMLProps<HTMLHeadingElement> {
  type: HeaderType;
}

export function MDXHeader({ type: HeaderTag, ...props }: Props) {
  const targetSectionRef = useRef<HTMLHeadingElement>(null);

  assert(typeof props.children === 'string', 'children must be string');

  const onClick = useCallback(() => {
    if (targetSectionRef.current) {
      window.history.pushState(null, '', `#${props.children}`);
      targetSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [props.children]);

  return (
    <HeaderTag
      id={props.children}
      ref={targetSectionRef}
      onClick={onClick}
      className={`group ${headerStyle(HeaderTag)}`}
      style={{ cursor: 'pointer' }}
    >
      {props.children}
      <svg
        className="ml-2 w-4 h-4 opacity-0 transition-opacity duration-200 group-hover:opacity-50 inline-flex"
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
    </HeaderTag>
  );
}

function headerStyle(type: HeaderType) {
  switch (type) {
    case 'h1':
      return 'text-4xl font-bold my-12 flex items-center';
    case 'h2':
      return 'text-2xl font-bold my-8 flex items-center';
    case 'h3':
      return 'text-xl font-bold my-6 flex items-center';
    case 'h4':
      return 'text-lg font-bold my-4 flex items-center';
    case 'h5':
      return 'text-base font-bold m-2 flex items-center';
    case 'h6':
      return 'text-sm font-bold flex items-center';
    default:
      return 'text-4xl font-bold my-12 flex items-center';
  }
}
