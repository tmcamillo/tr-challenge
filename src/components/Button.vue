<script setup lang="ts">
import { computed } from 'vue'

interface PropsButton {
  bgColor: 'white' | 'black' | 'transparent'
  label?: string
}

const props = withDefaults(defineProps<PropsButton>(), {
  label: 'click me'
})

const colorSet = computed(() => {
  let sameAttribute = 'text-sm py-1 px-6 rounded-full'
  switch (props.bgColor) {
    case 'white':
      return `border border-slate-200 bg-white hover:bg-slate-200 text-black font-semibold ${sameAttribute}`
    case 'black':
      return `bg-zinc-900 hover:bg-zinc-800 text-white ${sameAttribute}`
    default:
      return `bg-transparent text-slate-400`
  }
})
</script>

<template>
  <button data-cy="button" :class="colorSet">
    <slot>{{ props.label }}</slot>
  </button>
</template>
