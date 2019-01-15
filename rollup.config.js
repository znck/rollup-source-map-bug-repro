import vue from 'rollup-plugin-vue'

export default {
  input: './App.vue',
  plugins: [vue()],
  output: {
    file: 'dist/app.js',
    format: 'cjs',
    sourcemap: true
  }
}
