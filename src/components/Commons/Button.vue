<script setup lang="ts">
interface PropsButton {
  bgColor: 'white' | 'black' | 'transparent'
  label?: string
}

const props = withDefaults(defineProps<PropsButton>(), {
  label: 'click me'
})

</script>

<template>
  <button
    data-cy="button"
    :class="{'border border-slate-200 bg-white hover:bg-slate-200 text-black font-semibold text-sm py-1 px-6 rounded-full': bgColor === 'white',
    'bg-zinc-900 hover:bg-zinc-800 text-white text-sm py-1 px-6 rounded-full': bgColor === 'black',
    'bg-transparent text-slate-400': bgColor === 'transparent' }"
    class="text-sm py-1 px-6 rounded-full"
  >
    <slot>{{ props.label }}</slot>
  </button>
</template>
