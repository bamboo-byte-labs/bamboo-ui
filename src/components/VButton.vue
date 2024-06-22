<template>
    <button :class="buttonClasses">
      <slot />
      <template v-if="icon && variant === 'with-icon'">
        <span :class="iconClasses"><slot name="icon" /></span>
      </template>
    </button>
  </template>
  
  <script setup lang="ts">
  import { computed, defineProps } from 'vue';
  
  const props = defineProps({
    variant: {
      type: String,
      default: 'primary',
    },
    icon: {
      type: Boolean,
      default: false,
    },
  });
  
  const buttonClasses = computed(() => {
    const baseClasses = 'font-bold py-2 px-4 rounded transition duration-300 transform hover:-translate-y-1 flex items-center justify-center';
    const variants: { [key: string]: string } = {
      primary: 'bg-primary text-primary-foreground hover:bg-blue-500 focus:ring-primary',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-pink-400 focus:ring-secondary',
      destructive: 'bg-destructive text-destructive-foreground hover:bg-pink-600 focus:ring-destructive',
      icon: 'bg-primary text-primary-foreground',
      'with-icon': 'bg-primary text-primary-foreground hover:bg-blue-500 focus:ring-primary',
      'as-child': 'bg-muted text-muted-foreground hover:bg-muted-600 focus:ring-muted',
    };
    return `${baseClasses} ${variants[props.variant] || variants.primary}`;
  });
  
  const iconClasses = computed(() => {
    return 'ml-2';
  });
  </script>
  