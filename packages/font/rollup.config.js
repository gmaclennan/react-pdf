import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import sourceMaps from 'rollup-plugin-sourcemaps';

import pkg from './package.json';

const external = [
  '@babel/runtime/regenerator',
  '@babel/runtime/helpers/extends',
  '@babel/runtime/helpers/asyncToGenerator',
  '@babel/runtime/helpers/objectWithoutPropertiesLoose',
  ...Object.keys(pkg.dependencies),
];

const babelConfig = ({ browser }) => ({
  babelrc: false,
  exclude: 'node_modules/**',
  runtimeHelpers: true,
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
        modules: false,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
  ],
});

const getPlugins = ({ browser }) => [
  sourceMaps(),
  babel(babelConfig({ browser })),
  replace({
    BROWSER: JSON.stringify(browser),
  }),
];

const serverConfig = {
  input: './src/index.js',
  output: {
    format: 'cjs',
    file: 'lib/index.js',
    exports: 'named',
    sourcemap: true,
  },
  external,
  plugins: getPlugins({ browser: false }),
};

const browserConfig = {
  input: './src/index.js',
  output: {
    format: 'cjs',
    file: 'lib/index.browser.js',
    exports: 'named',
    sourcemap: true,
  },
  external,
  plugins: getPlugins({ browser: true }),
};

export default [serverConfig, browserConfig];
