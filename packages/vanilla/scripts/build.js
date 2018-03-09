const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const string = require('rollup-plugin-string');
const collectSass = require('rollup-plugin-collect-sass');
const svg = require('rollup-plugin-svg');
const rootImport = require('rollup-plugin-root-import');

const inputOptions = {
  input: 'src/index.js',
  plugins: [
    rootImport({
      root: `${__dirname}/src`,
      useEntry: 'prepend',
      extensions: '.js'
    }),
    babel({
      exclude: ['node_modules/**', '**/*.scss', '**/*.html', '**/*.svg']
    }),
    collectSass({
      include: '**/*.scss',
      extract: 'lib/hig.css',
      importOnce: true
    }),
    string({
      include: '**/*.html'
    }),
    svg()
  ],
  external: ['hig-interface', 'mustache', 'i18next']
};

const outputOptions = {
  name: 'HigVanilla',
  file: 'lib/hig.js',
  format: 'es'
};

async function build() {
  const bundle = await rollup.rollup(inputOptions);
  bundle.write(outputOptions);
}

build();
