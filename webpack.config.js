const { origin } = require(`./js/services/service_factory`),
  htmlWebpackPlugin = require('html-webpack-plugin'),
  pathLib = require("path"),
  fakeapi = require(`./api/index.js`),
  webpack = require(`webpack`),
  fs = require("fs"),
  path = require("path"),
  url = require(`url`), { server } = require(`smart-angular`),
  vloader = require(`ps-view-loader`),
  __DEVELOPMENT__ = {
    devtool: 'inline-source-map',
    mode: "development",
    entry: pathLib.resolve(__dirname, "./psx-baogang/index.js"),
    output: {
      path: pathLib.resolve(__dirname, "./psx-baogang/build"),
      filename: "bundle.js"
    },
    plugins: [new htmlWebpackPlugin({
      template: path.join(__dirname, './psx-baogang/index.html'),
      filename: 'index1.html'
    })],
    module: {
      rules: [{
        test: /\.jsx/,
        use: 'babel-loader'
      }]
    },
    devServer: {
      open: true,
      openPage: "app-oc/index.html",
      contentBase: "./",
      inline: true,
      before: function (app) {
        server(app, "baogang");
        vloader.server(app, origin);
        fakeapi(app);
      },
      proxy: {
        '/api': {
          target: origin,
          security: false,
          changeOrigin: true
        },
        '/upload': {
          target: origin,
          security: false,
          changeOrigin: true
        }
      }
    }
  };
module.exports = __DEVELOPMENT__;