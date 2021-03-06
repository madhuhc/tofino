// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

import webpack from 'webpack';
import browserConfig from './webpack.config.browser.default';

export default {
  ...browserConfig,
  devtool: 'source-map',
  plugins: [
    ...browserConfig.plugins,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
};
