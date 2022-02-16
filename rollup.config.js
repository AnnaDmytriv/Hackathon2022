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
    plugins: [json(), nodeResolve(), commonjs(), terser()],
};
