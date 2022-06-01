module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ['custom'],
  ignorePatterns: ['plopfile.js'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
};
