<script setup lang="ts">
import { Channel } from '../../interfaces/interfaces'

import draggable from 'vuedraggable'

import InputAddChannel from './InputAddChannel.vue'
import ChannelItem from './ChannelItem.vue'
import Button from '../Commons/Button.vue'

import { useChannelsStore } from '../../stores/channels'
import { storeToRefs } from 'pinia'

const storeChannels = useChannelsStore()
const { channelsList } = storeToRefs(storeChannels)

function handleCreateNewChannel(textInputed: string) {
  const channelPayload: Channel = {
    label: textInputed,
    icon: getRandomIcon()
  }
  storeChannels.addChannel(channelPayload)
}

function getRandomIcon() {
  const iconList = ['fa-solid fa-phone', 'fa-regular fa-envelope', 'fa-brands fa-whatsapp']
  return iconList[Math.floor(Math.random() * iconList.length)]
}

function handleDeleteChannel(channelInd: number) {
  storeChannels.deleteChannel(channelInd)
}

function handleMove() {
  storeChannels.movedChannel()
}

function handleApply() {
  storeChannels.persistList()
}

function handleCancel() {
  storeChannels.cancelChanges()
}
</script>

<template>
  <section class="flex flex-col m-4 gap-2" data-cy="channel-manager">
    <h3 class="font-extrabold text-2xl text-black text-left">Channels</h3>
    <div class="bg-white border rounded-md p-2 sm:p-8 shadow-md">
      <InputAddChannel @createNewChannel="handleCreateNewChannel" />

      <draggable
        v-model="channelsList"
        item-key="id"
        tag="ul"
        class="flex flex-col my-4 mx-4 px-3 gap-3 max-h-40 overflow-y-auto list-group-item"
        @change="handleMove"
      >
        <template #item="{ element, index }">
          <ChannelItem
            :label="element.label"
            :icon-name="element.icon"
            :index="index"
            @deleteChannel="handleDeleteChannel"
          />
        </template>
      </draggable>

      <div v-if="storeChannels.isChanged" class="flex justify-end gap-2 mt-2">
        <Button bg-color="white" @click="handleCancel">Cancel</Button>
        <Button bg-color="black" @click="handleApply"> Apply </Button>
      </div>
    </div>
  </section>
</template>
