module.exports = {
  plugins: [
    require('postcss-plugin-px2rem')({
      rootValue: 37.5,
      exclude: /(node_module)/,
      minPixelValue: 3
    })
  ]
}
