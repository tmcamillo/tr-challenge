<script setup lang="ts">
import { ref } from 'vue'

const textInputed = ref('')
const emit = defineEmits(['createNewChannel'])

function handleSubmit() {
  if (!textInputed.value) return
  emit('createNewChannel', textInputed.value)
  textInputed.value = ''
}
</script>

<template>
  <form
    class="relative flex items-center text-slate-400 focus-within:text-black"
    data-cy="channel-input-form"
    @submit.prevent="handleSubmit"
  >
    <font-awesome-icon
      class="ml-3 absolute pointer-events-none"
      icon="fa-solid fa-search"
      size="sm"
    />
    <input
      v-model="textInputed"
      class="w-full pr-3 pl-10 py-1.5 placeholder-slate-400 text-black focus:text-black rounded-full border-none ring-1 ring-slate-200"
      type="text"
      name="add-channel"
      placeholder="Add channel"
      autocomplete="off"
      aria-label="Add channel"
    />
  </form>
</template>
