import styles from "rollup-plugin-styles";
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import autoprefixer from 'autoprefixer';

import visualizer from 'rollup-plugin-visualizer';
import { terser } from 'rollup-plugin-terser';
import packageJson from './package.json';
import dts from 'rollup-plugin-dts';


export default [{
  input: './src/lib/index.ts',
  output: [
    {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        name: 'react-flippy'
    },
    {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.build.json',
      declaration: true,
      declarationDir: './types' 
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
}, {
  input: 'dist/esm/types/index.d.ts',
  output: [{ file: 'dist/index.d.ts', format: "esm" }],
  external: [/\.css$/],
  plugins: [dts()],
}];