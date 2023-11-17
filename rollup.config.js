import { fileURLToPath } from 'url'
import commonjs from '@rollup/plugin-commonjs'

export default async () => {
  return {
    input: fileURLToPath(await import.meta.resolve('attachmediastream')),
    output: {
      file: 'attachmediastream.mjs',
      format: 'esm',
    },
    external: ['webrtc-adapter'],
    plugins: [commonjs()],
  }
}
