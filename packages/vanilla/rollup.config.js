import babel from 'rollup-plugin-babel';
import string from 'rollup-plugin-string';
import scss from 'rollup-plugin-scss';
import svg from 'rollup-plugin-svg';
import rootImport from 'rollup-plugin-root-import';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'es'
  },
  plugins: [
    rootImport({
      root: `${__dirname}/src`,
      useEntry: 'prepend',
      extensions: ['.js', '.scss']
    }),
    babel({
      include: '**/*.js',
      exclude: 'node_modules/**'
    }),
    scss({
      include: '**/*.scss',
      output: 'bundle.css'
    }),
    string({
      include: '**/*.html'
    }),
    svg()
  ],
  external: ['hig-interface']
};
