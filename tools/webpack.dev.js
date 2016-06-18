import webpack from 'webpack';
import OpenBrowserPlugin from 'open-browser-webpack-plugin';

const config = {
  devtool: 'eval-source-map',
};

const loaders = [
  {
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'react-hot!babel',
  },
];

const plugins = [
  new webpack.NoErrorsPlugin(),
  new webpack.optimize.CommonsChunkPlugin('vendor', 'scripts/vendor.js'),
  new OpenBrowserPlugin({ url: 'http://localhost:3000' }),
];

function addDevOptions(origConfig) {
  const devConfig = Object.assign({}, origConfig, config);
  devConfig.module.loaders.push(...loaders);
  devConfig.plugins.push(...plugins);
  return devConfig;
}

export default addDevOptions;
