#! /usr/bin/env node

const path = require("path");
const rollup = require("rollup");
const babel = require("rollup-plugin-babel");
const commonjs = require("rollup-plugin-commonjs");
const nodeResolve = require("rollup-plugin-node-resolve");
const postcss = require("rollup-plugin-postcss");
const json = require("rollup-plugin-json");
const postcssFuncitons = require("postcss-functions");

const packageMeta = require(path.resolve(process.cwd(), "package.json"));

const {
  name: packageName,
  version: packageVersion,
  peerDependencies = {},
  dependencies = {},
  module: esOutputFile = "build/index.es.js",
  css: cssOutputFile = "build/index.es.css"
} = packageMeta;

const external = Object.keys(peerDependencies).concat(
  Object.keys(dependencies)
);

const inputOptions = {
  input: "src/index.js",
  external,
  plugins: [
    nodeResolve(),
    babel({
      exclude: [
        "**/node_modules/**",
        "**/*.css",
        "**/*.scss",
        "**/*.html",
        "**/*.svg",
        "**/*.json"
      ],
      presets: [
        [
          "env",
          {
            modules: false,
            targets: {
              browser: ">1%"
            }
          }
        ],
        "stage-2",
        "react"
      ]
    }),
    commonjs(),
    json(),
    postcss({
      extract: true,
      output: cssOutputFile,
      plugins: [postcssFuncitons]
    })
  ]
};

const esModulesOutputOptions = {
  name: "HIG",
  file: esOutputFile,
  format: "es"
};

async function build() {
  console.log(`Bundling ${packageName} v${packageVersion}.`);

  try {
    const bundle = await rollup.rollup(inputOptions);

    bundle.write(esModulesOutputOptions);
  } catch (e) {
    console.log(e);
  }
}

build();
