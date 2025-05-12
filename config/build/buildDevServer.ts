import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(): DevServerConfiguration {
  return {
        static: './dist',
        port: env.port ?? '3000',
        open: true,
      }
}