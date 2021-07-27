import multi from '@rollup/plugin-multi-entry';

export default {
  input: 'bar.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
  plugins: [
    multi(),
  ],
};
