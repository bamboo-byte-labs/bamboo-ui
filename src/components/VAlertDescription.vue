<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '../lib/utils';

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();
</script>

<template>
  <div :class="cn('text-sm [&_p]:leading-relaxed text-left', props.class)">
    <slot />
  </div>
</template>
