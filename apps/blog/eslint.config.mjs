import baseConfig from '../../eslint.config.mjs';

export default [
  ...baseConfig,
  {
    files: ['**/*.ts', '**/*.tsx'], // 명시적으로 TS/TSX만 포함
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  {
    ignores: ['**/*.js'], // 명시적으로 JS 파일을 무시
  },
];
