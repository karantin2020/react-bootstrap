import webpack from 'webpack';

const config = {};

const output = {
  filename: 'scripts/[name].[chunkhash].js',
};

const loaders = [
  {
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'babel',
  },
];

// PLUGINS
const plugins = [
  new webpack.optimize.CommonsChunkPlugin('vendor', 'scripts/vendor.[chunkhash].js'),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
  }),
];

function addProdOptions(origConfig) {
  const prodConfig = Object.assign({}, origConfig, config);
  prodConfig.output = Object.assign({}, origConfig.output, output);
  prodConfig.module.loaders.push(...loaders);
  prodConfig.plugins.push(...plugins);
  return prodConfig;
}

export default addProdOptions;
