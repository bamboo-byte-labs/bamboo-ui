<template>
  <Story title="VButton" :layout="{ type: 'grid', width: 500 }">
    <div class="space-y-4">
      <Variant title="Primary Button">
        <VButton variant="primary">Primary Button</VButton>
      </Variant>
      <Variant title="Secondary Button">
        <VButton variant="secondary">Secondary Button</VButton>
      </Variant>
      <Variant title="Destructive Button">
        <VButton variant="destructive">Destructive Button</VButton>
      </Variant>
      <Variant title="Icon Button">
        <VButton variant="icon" icon>
          <template #icon>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </template>
        </VButton>
      </Variant>
      <Variant title="With Icon Button">
        <VButton variant="with-icon" icon>
          With Icon
          <template #icon>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </template>
        </VButton>
      </Variant>
      <Variant title="As Child Button">
        <VButton variant="as-child">As Child</VButton>
      </Variant>
    </div>
  </Story>
</template>

<script setup lang="ts">
import VButton from '../components/VButton.vue'
</script>
