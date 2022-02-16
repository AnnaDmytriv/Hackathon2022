import excludeDependenciesFromBundle from 'rollup-plugin-exclude-dependencies-from-bundle';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'app/index.js',
    output: [{
        file: "dist/index.es.js",
        format: 'esm',
        sourcemap: true,
    },
    {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true,
    }],
    plugins: [excludeDependenciesFromBundle({ dependencies: true }), json(), nodeResolve(), commonjs(), terser()],
};

// const browserConfig = {
//     input: 'app/index.js',
//     output: {
//         file: 'dist/index.js',
//         format: 'cjs',
//         sourcemap: true,
//     },
//     plugins: [json(), nodeResolve(), commonjs(), terser()],
// };

//   export default [packageConfig, browserConfig];
