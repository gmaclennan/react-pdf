module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          electron: '9.0.0',
        },
        // Only use polyfills necessary for target env
        useBuiltIns: 'usage',
        corejs: 3,
        shippedProposals: true,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-optional-chaining',
  ],
};
