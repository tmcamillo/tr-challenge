<script setup lang="ts">
import Button from './Button.vue'
import SquareIcon from './SquareIcon.vue'

interface PropsChannelItem {
  label: string
  index: number
  iconName: 'fa-regular fa-envelope' | 'fa-solid fa-phone' | 'fa-brands fa-whatsapp'
}
const props = defineProps<PropsChannelItem>()

const emit = defineEmits(['deleteChannel'])
function handleDelete() {
  emit('deleteChannel', props.index)
}
</script>

<template>
  <li class="list-none flex flex-row items-center justify-between" data-cy="channel-item">
    <div class="flex flex-row items-center gap-3">
      <font-awesome-icon icon="fa-solid fa-grip-vertical" color="#e2e8f0" />
      <SquareIcon :icon-name="props.iconName" />
      <span>{{ props.label }}</span>
    </div>
    <Button bg-color="transparent" @click="handleDelete">Remove</Button>
  </li>
</template>
