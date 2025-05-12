import { Configuration } from "webpack";

export function buildPlugins(): Configuration['plugins'] {
  return [
          new HtmlWebpackPlugin({template: path.resolve(__dirname, 'src', 'index.html')}),
          isDev && new webpack.ProgressPlugin(),
          isProd && new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
          })
        ].filter(Boolean)
}