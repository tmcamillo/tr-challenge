<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { IconsName } from '../../interfaces/interfaces';

interface PropsSquerIcon {
  iconName?: IconsName
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
