import path from 'path'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'

const reslv = p => {
  return path.resolve(__dirname, p)
}

const plugins = [
  resolve(),
  commonjs(),
  typescript({
    clean: true,
    allowNonTsExtensions: true,
    typescript: require('typescript')
  }),
  vue()
]

export default {
  input: path.resolve(__dirname, 'src/main.ts'),
  output: [
    {
      format: 'es',
      file: path.resolve(__dirname, 'dist/ui.es.js')
    }
  ],
  plugins,
  external: ['vue']
}
