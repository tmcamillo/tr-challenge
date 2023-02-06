import { defineStore } from 'pinia'
import { Channel } from '../interfaces/interfaces'

export const useChannelsStore = defineStore({
  id: 'channels-store',
  state: () => ({
    persistedChannels: [] as Channel[],
    channelsList: [] as Channel[],
    isChanged: false,
    id: 0
  }),
  actions: {
    addChannel(item: Channel) {
      this.channelsList.push(item)
      this.isChanged = true
    },
    deleteChannel(itemID: number) {
      this.channelsList.splice(itemID, 1)
      this.isChanged = true
    },
    movedChannel() {
      this.isChanged = true
    },
    persistList() {
      this.persistedChannels = [...this.channelsList]
      this.isChanged = false
    },
    cancelChanges() {
      this.channelsList = [...this.persistedChannels]
      this.isChanged = false
    }
  }
})
