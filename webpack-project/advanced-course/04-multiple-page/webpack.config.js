const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  plugins: [new HtmlWebpackPlugin()],
  entry: {
    main: {
      import: ['./src/app2.js', './src/app.js'],
      dependOn: 'lodashModule',
    },
    main2: {
      import: './src/app3.js',
      dependOn: 'lodashModule',
    },
    lodashModule: 'lodash',
  },
  output: {
    clean: true,
  },
};
