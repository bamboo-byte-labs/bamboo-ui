import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'BambooUI',
      fileName: (format) => `BambooUI.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into the library
      external: ['vue', 'radix-vue', 'clsx', 'tailwind-merge', '@iconify/vue', 'lucide-vue-next'],
      output: {
        // provide global variables to use in the UMD build for externalized deps
        globals: {
          vue: 'Vue',
          'radix-vue': 'RadixVue',
          clsx: 'clsx',
          'tailwind-merge': 'twMerge',
          '@iconify/vue': 'Iconify',
          'lucide-vue-next': 'LucideVueNext'
        }
      }
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
