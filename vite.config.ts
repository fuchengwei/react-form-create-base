import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import viteSvgIcons from 'vite-plugin-svg-icons'
import path from 'path'

export default defineConfig({
  plugins: [
    reactRefresh(),
    viteSvgIcons({
      iconDirs: [path.resolve(process.cwd(), 'src/icons')],
      symbolId: 'svg-icon-[dir]-[name]'
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  base: './',
  server: {
    open: true,
    cors: true,
    host: true
  },
  build: {
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, 'src/core/index.ts'),
      formats: ['es', 'umd'],
      name: 'ReactFormCreate',
      fileName: (format) => `react-form-create.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'antd', 'moment', '@babel/standalone'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDom',
          antd: 'antd',
          moment: 'moment',
          '@babel/standalone': 'Babel'
        }
      }
    }
  }
})
