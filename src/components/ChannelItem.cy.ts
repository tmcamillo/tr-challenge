import ChannelItem from './ChannelItem.vue'

describe('<ChannelItem />', () => {
  it('should render the correct text', () => {
    cy.mount(ChannelItem, {
      props: {
        label: 'your contact here',
        index: 0
      }
    })
    cy.get('[data-cy="channel-item"]').find('span').should('have.text', 'your contact here')
  })

  it.only('should render all children components: button and icon collection', () => {
    cy.mount(ChannelItem, {
      props: {
        label: 'test@trengo.com',
        index: 0
      }
    })
    cy.get('[data-cy="channel-item"] > div > svg').first().should('have.class', 'fa-grip-vertical')
    cy.get('[data-cy="channel-item"] > div').children('[data-cy="square-icon"]').should('exist')
    cy.get('[data-cy="channel-item"]')
      .children('[data-cy="button"]')
      .should('exist')
      .and('have.text', 'Remove')
  })

  it('should emit an event with a value by clicking the Remove button', () => {
    cy.mount(ChannelItem, {
      props: {
        label: 't@t.com',
        index: 53,
        onDeleteChannel: cy.spy().as('deleteChannelSpy')
      }
    })
    cy.get('[data-cy="channel-item"]').children('[data-cy="button"]').click()
    cy.get('@deleteChannelSpy').should('have.been.called').and('have.been.calledWith', 53)
  })
})
