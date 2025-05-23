'use client';

import Image from 'next/image';

interface Props {
  className?: string;
}

export function Bio({ className }: Props) {
  return (
    <div
      className={`border flex flex-col gap-4 px-4 py-8 bg-white shadow-lg rounded-2xl ${className}`}
    >
      <div className="flex flex-row">
        <Image
          className="rounded-full ml-4 mr-6 my-0 w-24 h-24 !mt-2 !mb-0"
          alt="Profile image"
          src="/img/profile.jpeg"
          width={96}
          height={96}
        />
        <div className="flex flex-col space-y-0.5 md:text-left">
          <h3 className="tracking-tight text-lg font-bold !-mt-0 !mb-0">Kyun2da</h3>
          <p className="text-sm text-gray-500">Frontend Developer</p>
          <p className="text-sm pt-4">{'개발자 허균의 블로그'}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="pl-4 flex flex-row md:flex-row gap-2 items-center justify-center md:justify-start">
          <GithubButton />
          <TwitterButton />
          <LinkedInButton />
          <EmailButton />
        </div>
      </div>
    </div>
  );
}

function GithubButton() {
  return (
    <button
      type="button"
      data-te-ripple-init
      data-te-ripple-color="light"
      className="mb-2 flex rounded px-4 py-2.5 text-xs font-medium leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
      style={{ backgroundColor: '#333' }}
      onClick={() => {
        window.open('https://www.github.com/kyun2da/', '_blank');
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2 h-4 w-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
      Github
    </button>
  );
}

function TwitterButton() {
  return (
    <button
      type="button"
      className="mb-2 flex rounded px-4 py-2.5 text-xs font-medium leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
      style={{ backgroundColor: '#1da1f2' }}
      onClick={() => {
        window.open('https://twitter.com/kyun2da', '_blank');
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2 h-4 w-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
      </svg>
      Twitter
    </button>
  );
}

function LinkedInButton() {
  return (
    <button
      type="button"
      className="mb-2 flex rounded px-4 py-2.5 text-xs font-medium leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
      style={{ backgroundColor: '#0077b5' }}
      onClick={() => {
        window.open('https://www.linkedin.com/in/kyun2da/', '_blank');
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2 h-4 w-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
      LinkedIn
    </button>
  );
}

function EmailButton() {
  return (
    <button
      type="button"
      className="mb-2 flex rounded px-4 py-2.5 text-xs font-medium leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
      style={{ backgroundColor: '#ea4335' }}
      onClick={() => {
        window.location.href = 'mailto:kyun2dot@gmail.com';
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="mr-2 h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
        />
      </svg>
      Email
    </button>
  );
}
