// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  presets: [
    [
      path.resolve(__dirname, 'node_modules', '@babel/preset-env'),
      {
        useBuiltIns: 'entry',
        corejs: 3,
        targets:
          '>0.2%, not dead, not ie <= 11, not op_mini all, firefox >= 66',
      },
    ],
    path.resolve(__dirname, 'node_modules', '@babel/preset-react'),
  ],
  plugins: [
    [
      path.resolve(
        __dirname,
        'node_modules',
        '@babel/plugin-proposal-class-properties',
      ),
      { loose: true },
    ],
  ],
  env: {
    test: {
      presets: [
        [
          path.resolve(__dirname, 'node_modules', '@babel/preset-env'),
          { targets: { node: 'current' } },
        ],
      ],
    },
  },
};
