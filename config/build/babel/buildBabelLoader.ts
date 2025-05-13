import { BuildOptions } from "../types/types";
import { removeDataTestIdBabelPlugin } from "./removeDataTestIdBabelPlugin";

export function buildBabelLoader({mode}: BuildOptions) {
  const isProd = mode === 'production'

  const plugins = []

  if (isProd) {
    plugins.push([
      removeDataTestIdBabelPlugin,
      {
        props: ['data-testid']
      }
    ])
  }

  return {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        plugins: plugins.length ? plugins : undefined
      }
    },  
  }
}