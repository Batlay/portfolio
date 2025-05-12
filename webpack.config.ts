
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { buildWebpack } from './config/build/buildWebpack';

type Mode = 'production' | 'development'

interface EnvVariables {
  mode: Mode,
  port: number,
}

export default (env: EnvVariables) => {
  const isDev = env.mode === 'development'
  const isProd = env.mode === 'production'

  const config: webpack.Configuration = buildWebpack()
  return config
};
