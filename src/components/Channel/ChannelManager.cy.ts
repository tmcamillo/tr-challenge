import ChannelManager from './ChannelManager.vue'

import { createPinia, storeToRefs } from 'pinia'
import { useChannelsStore } from '../../stores/channels'

const pinia = createPinia()
const channels = useChannelsStore(pinia)
const { isChanged, channelsList, persistedChannels } = storeToRefs(useChannelsStore())

describe('<ChannelManager />', () => {
  beforeEach(() => {
    (channelsList.value = []), (persistedChannels.value = [])
    cy.mount(ChannelManager, { channels })
  })

  describe('Display Buttons', () => {
    it('should not display buttons, Cancel and Apply, when nothing has changed', () => {
      cy.mount(ChannelManager)
      cy.get('[data-cy="channel-manager"]').find('[data-cy="button"]').should('not.exist')
    })

    it('should display buttons, Cancel and Apply, when something has changed', () => {
      isChanged.value = true
      cy.mount(ChannelManager, { channels })
      cy.get('[data-cy="channel-manager"]')
        .find('[data-cy="button"]')
        .should('exist')
        .and('be.visible')
        .and('have.length', 2)
    })
  })

  describe('Display Channels List', () => {
    it('should create a list of channels by including new items', () => {
      cy.get('[data-cy="channel-manager"]')
        .find('[data-cy="channel-item"]')
        .should('have.length', 0)
      createChannelsList()
      cy.get('[data-cy="channel-manager"]')
        .find('[data-cy="channel-item"]')
        .should('have.length', 2)
    })

    it('should update the list of channels by deleting an item', () => {
      createChannelsList()
      cy.get('[data-cy="channel-manager"]')
        .find('[data-cy="channel-item"]')
        .should('have.length', 2)
      deleteChannelItem()
      cy.get('[data-cy="channel-manager"]')
        .find('[data-cy="channel-item"]')
        .should('have.length', 1)
    })
  })

  describe('Save and Cancel List', () => {
    it('should display the last saved modification by clicking on Cancel button', () => {
      createChannelsList()
      saveCurrentList()
      createChannelsList()
      cy.get('[data-cy="channel-manager"]')
        .find('[data-cy="channel-item"]')
        .should('have.length', 4)
      cancelUnsavedModification()
      cy.get('[data-cy="channel-manager"]')
        .find('[data-cy="channel-item"]')
        .should('have.length', 2)
    })
  })

  describe('Reorder the list', () => {
    it('should drag the item up and reorder the list', () => {
      createChannelsList()
      saveCurrentList()
      cy.get('[data-cy="channel-manager"]').find('[data-cy="channel-item"]').eq(0).as('first')
      cy.get('[data-cy="channel-manager"]').find('[data-cy="channel-item"]').eq(1).as('second')
      cy.get('@second').drag('@first')
      cy.get('[data-cy="channel-manager"]')
        .find('[data-cy="channel-item"]')
        .eq(0)
        .find('span')
        .should('have.text', 'second contact')
      cy.get('[data-cy="channel-manager"]')
        .find('[data-cy="channel-item"]')
        .eq(1)
        .find('span')
        .should('have.text', 'first contact')
    })
  })
})

function createChannelsList() {
  cy.get('input[name="add-channel"]').type('first contact').invoke('val')
  cy.get('[data-cy="channel-input-form"]').submit()
  cy.get('input[name="add-channel"]').type('second contact').invoke('val')
  cy.get('[data-cy="channel-input-form"]').submit()
}

function deleteChannelItem() {
  cy.get('[data-cy="channel-manager"]')
    .find('[data-cy="channel-item"]')
    .eq(1)
    .find('[data-cy="button"]')
    .click()
}

function saveCurrentList() {
  cy.get('[data-cy="channel-manager"]').find('[data-cy="button"]').contains('Apply').click()
}

function cancelUnsavedModification() {
  cy.get('[data-cy="channel-manager"]').find('[data-cy="button"]').contains('Cancel').click()
}
