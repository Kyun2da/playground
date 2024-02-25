import { CheckIcon } from '@components/icon/CheckIcon';
import { CopyIcon } from '@components/icon/CopyIcon';
import { useHover } from 'hooks/useHover';
import { useState } from 'react';
import { MDXHeader } from './components/header/MDXHeader';

export const MDXComponents = {
  h1: (props: any) => <MDXHeader type="h1" {...props} />,
  h2: (props: any) => <MDXHeader type="h2" {...props} />,
  h3: (props: any) => <MDXHeader type="h3" {...props} />,
  h4: (props: any) => <MDXHeader type="h4" {...props} />,
  h5: (props: any) => <MDXHeader type="h5" {...props} />,
  h6: (props: any) => <MDXHeader type="h6" {...props} />,
  p: (props: any) => <p className="text-base/7" {...props} />,
  a: (props: any) => <a className="text-blue-500 hover:underline" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside my-4" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside" {...props} />,
  li: (props: any) => <li className="text-base/7" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-gray-300 pl-4 my-4" {...props} />
  ),
  hr: (props: any) => <hr className="border-gray-300" {...props} />,
  table: (props: any) => <table className="table-auto" {...props} />,
  th: (props: any) => <th className="border border-gray-300 px-4 py-2" {...props} />,
  td: (props: any) => <td className="border border-gray-300 px-4 py-2" {...props} />,
  inlineCode: (props: any) => <code className="text-sm bg-gray-100 px-1 rounded" {...props} />,
  pre: (props: any) => <pre className="text-base/7" {...props} />,
  code: (props: any) => <Code {...props} />,
  img: (props: any) => <img className="rounded" {...props} />,
  strong: (props: any) => <strong className="font-bold" {...props} />,
  em: (props: any) => <em className="italic" {...props} />,
  del: (props: any) => <del className="line-through" {...props} />,
};

function Code(props: any) {
  const [ref, isHover] = useHover<HTMLDivElement>();
  const [copied, setCopied] = useState(false);

  return (
    <div className="relative" ref={ref}>
      <pre {...props} className={`text-base ${props?.className}`} />
      {isHover ? (
        <button
          className={`absolute top-2 right-4`}
          onClick={() => {
            setCopied(true);
            navigator.clipboard.writeText(ref.current?.textContent ?? '');
            setTimeout(() => {
              setCopied(false);
            }, 2000);
          }}
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
        </button>
      ) : null}
    </div>
  );
}
