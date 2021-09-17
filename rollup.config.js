import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import typescript from 'rollup-plugin-typescript';

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.min.js',
      format: 'umd',
      name: 'ReactResting',
      exports: 'named',
    },
    external: ['react'],
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**',
      }),
      commonjs(),
      typescript(),
      uglify(),
    ],
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.js',
      format: 'umd',
      name: 'ReactResting',
      exports: 'named',
      sourcemap: true,
    },
    external: ['react'],
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**',
      }),
      commonjs(),
      typescript(),
      uglify(),
    ],
  },
];
