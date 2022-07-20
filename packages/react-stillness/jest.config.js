module.exports = {
  setupFilesAfterEnv: ['./jest-setup.ts'],
  testMatch: ["**/__tests__/**/?(*.)(spec|test).[jt]s?(x)"],
  // testRegex: 'decorateHandler.spec.tsx',
  transform: {
    "\\.[jt]sx?$": "./jest-transformer.js",
  },
  collectCoverageFrom: [
		'**/src/**/*.tsx',
		'**/src/**/*.ts',
		'!**/__tests__/**',
		'!**/dist/**',
	],
  globals: {
    __DEV__: true,
  },
};
