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
  p: (props: any) => <p className="text-base/7 my-4" {...props} />,
  a: (props: any) => <a className="text-blue-500 hover:underline" {...props} />,
  ul: (props: any) => {
    return (
      <ul
        className="list-disc list-outside pl-5 space-y-1 [&>li>ol]:ml-6 [&>li>ol]:list-[lower-alpha] [&>li>ol]:mt-1 [&>li>ul]:ml-6 [&>li>ul]:list-[circle] [&>li>ul]:mt-1 [p+&]:ml-6 [ol+&]:ml-6"
        {...props}
      />
    );
  },
  ol: (props: any) => {
    return (
      <ol
        className="list-decimal list-outside pl-5 space-y-1 [&>li>ol]:ml-6 [&>li>ol]:list-[lower-alpha] [&>li>ol]:mt-1 [&>li>ul]:ml-6 [&>li>ul]:list-[circle] [&>li>ul]:mt-1"
        {...props}
      />
    );
  },
  li: (props: any) => {
    return <li className="text-base/7" {...props} />;
  },
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-gray-300 pl-4 my-4" {...props} />
  ),
  hr: (props: any) => <hr className="border-gray-300" {...props} />,
  table: (props: any) => <table className="table-auto text-sm" {...props} />,
  th: (props: any) => <th className="border border-gray-300 px-4 py-2" {...props} />,
  td: (props: any) => <td className="border border-gray-300 px-4 py-2" {...props} />,
  inlineCode: (props: any) => <code className="text-sm bg-gray-100 px-1 rounded" {...props} />,
  pre: (props: any) => <pre {...props} />,
  code: (props: any) => <Code {...props} />,
  img: (props: any) => <img className="rounded" {...props} />,
  strong: (props: any) => <strong className="font-bold" {...props} />,
  em: (props: any) => <em className="italic" {...props} />,
  del: (props: any) => <del className="line-through" {...props} />,
};

function Code(props: any) {
  const [ref] = useHover<HTMLDivElement>();
  const [copied, setCopied] = useState(false);

  return (
    <div className="relative" ref={ref}>
      <pre {...props} className={`text-sm rounded-lg ${props?.className}`} />
      <button
        className={`absolute top-2 right-4 opacity-50 hover:opacity-100 transition-opacity`}
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
    </div>
  );
}
