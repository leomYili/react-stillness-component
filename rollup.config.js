import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import copy from 'rollup-plugin-copy';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import { readdirSync, statSync } from 'fs';
import { visualizer } from 'rollup-plugin-visualizer';
import path, { join } from 'path';

const root = path.resolve(__dirname, 'packages');
// 获取所有pkg
const tailPkgs = readdirSync(join(__dirname, 'packages')).filter(
  (pkg) =>
    pkg.charAt(0) !== '.' && statSync(path.resolve(root, pkg)).isDirectory()
);

const extensions = ['.js', '.ts', '.tsx', '.json'];
const isProd = process.env.NODE_ENV === 'production';

/**
 * 出口需要特殊处理
 * @param {*} output
 */
function getPKGOutputConfig(output, pkgPath) {
  if (!output) return [];

  if (Array.isArray(output)) {
    return output.map((item) => {
      item.file = path.resolve(root, pkgPath, item.file);
      return item;
    });
  } else {
    output.file = path.resolve(root, pkgPath, output.file);
    return output;
  }
}

export default tailPkgs.map((pkgPath) => {
  const pkg = require(path.resolve(root, pkgPath, 'package.json'));
  const { rollup } = pkg;

  return {
    input: path.resolve(root, pkgPath, rollup.input),
    output: getPKGOutputConfig(rollup.output, pkgPath),
    external: rollup.external || [],
    plugins: [
      copy({
        targets: [
          {
            src: path.resolve(root, pkgPath, 'src/assets'),
            dest: path.resolve(root, pkgPath, 'dist/'),
          },
        ],
      }),
      typescript({
        tsconfig: path.resolve(root, pkgPath, 'tsconfig.json'),
      }),
      nodeResolve({
        extensions,
      }),
      commonjs({
        include: 'node_modules/**',
      }),
      babel({
        exclude: '**/node_modules/**',
        babelHelpers: 'runtime',
        extensions,
      }),
      isProd &&
        terser({
          compress: {
            pure_getters: true,
            unsafe: true,
          },
        }),
      // visualizer(),
    ],
  };
});
