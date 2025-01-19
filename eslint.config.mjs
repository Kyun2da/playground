import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import prettierConfig from 'eslint-config-prettier';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], // 처리할 파일 확장자
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended, // 기본 ESLint 추천 규칙
  ...tseslint.configs.recommended, // TypeScript 추천 규칙
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: 'detect', // React 버전 자동 감지
      },
    },
  },
  prettierConfig, // Prettier 규칙 통합
  {
    rules: {
      // 추가 규칙 정의
      'react/react-in-jsx-scope': 'off', // React 17 이상에서 불필요
      '@typescript-eslint/no-explicit-any': 'off', // any 타입 사용 허용
    },
  },
];
