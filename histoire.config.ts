import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
  plugins: [
    HstVue(),
  ],
  setupFile: 'src/histoire.setup.ts',
  storyMatch: ['src/stories/**/*.story.vue'], // Make sure the path is correct
})
