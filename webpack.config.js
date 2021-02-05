module.exports = {
  mode: 'development',
  module: {
    rules: [{ test: /\.ts$/, use: "ts-loader" }],
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },  
}
