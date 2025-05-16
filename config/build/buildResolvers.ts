import { Configuration } from 'webpack';
import { BuildOptions } from './types/types';

export function buildResolvers(options: BuildOptions): Configuration['resolve'] {
  const resolveConfig = {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': options.paths.src,
    },
  };

  return resolveConfig;
}
