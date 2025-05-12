import webpack from 'webpack'
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';

export function buildWebpack(options:any): webpack.Configuration {
  return {
      mode: env.mode ?? 'development',
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
      },
      plugins: buildPlugins(),
      module: {
        rules: buildLoaders(),
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
      devtool: isDev ? 'inline-source-map' : false,
      devServer: isDev ? buildDevServer() : undefined,
    }
}