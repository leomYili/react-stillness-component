const babelJest = require("babel-jest");

module.exports = babelJest.createTransformer({
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
          esmodules: true,
        },
        bugfixes: true,
        loose: true,
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-transform-react-jsx',
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-runtime',
  ],
});