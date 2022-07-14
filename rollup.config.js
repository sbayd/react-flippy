import styles from "rollup-plugin-styles";
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import autoprefixer from 'autoprefixer';

import visualizer from 'rollup-plugin-visualizer';
import { terser } from 'rollup-plugin-terser';

const MODE = [
  {
    fomart: 'cjs'
  },
  {
    fomart: 'esm'
  },
  {
    fomart: 'umd'
  }
];

const configs = MODE.map((m) => {

  return {
    input: [
      './src/lib/index.ts'
    ],
    output: {
      name: "react-flippy",
      format: m.fomart,
      sourcemap: true,
      file: `dist/index.${m.fomart}.js`,
      format: m.fomart,
      exports: "named"
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.build.json',
        declaration: true,
        declarationDir: 'dist',
      }),
      terser(),
      visualizer({
        filename: 'bundle-analysis.html',
        open: true,
      }),
      styles({
        postcss: {
          plugins: [
              autoprefixer()
          ]
        }
      })
    ],
  };
})

export default configs;