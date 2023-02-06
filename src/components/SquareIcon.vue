<script setup lang="ts">
interface PropsSquerIcon {
  iconName?: 'fa-regular fa-envelope' | 'fa-solid fa-phone' | 'fa-brands fa-whatsapp'
}

const props = withDefaults(defineProps<PropsSquerIcon>(), {
  iconName: 'fa-regular fa-envelope'
})
</script>

<template>
  <div
    class="flex relative items-center justify-center content-center bg-slate-100 p-4 w-1 rounded"
    data-cy="square-icon"
  >
    <font-awesome-icon class="absolute" :icon="props.iconName" size="sm" />
  </div>
</template>
