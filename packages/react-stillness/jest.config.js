module.exports = {
  testMatch: ["**/__tests__/**/?(*.)(spec|test).[jt]s?(x)"],
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
