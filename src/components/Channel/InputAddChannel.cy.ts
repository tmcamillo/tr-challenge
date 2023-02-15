import InputAddChannel from './InputAddChannel.vue'

describe('<InputAddChannel />', () => {
  it('should emit an event with a value typed', () => {
    cy.mount(InputAddChannel, {
      props: {
        onCreateNewChannel: cy.spy().as('createNewChannelSpy')
      }
    })

    cy.get('input[name="add-channel"]')
      .type('teste@t.com')
      .invoke('val')
      .then((val) => {
        const myVal = val
        expect(myVal).to.equal('teste@t.com')
        cy.get('[data-cy="channel-input-form"]').submit()
        cy.get('@createNewChannelSpy')
          .should('have.been.called')
          .and('have.been.calledWith', 'teste@t.com')
      })
  })

  it('should NOT emit an event when input is empty', () => {
    cy.mount(InputAddChannel, {
      props: {
        onCreateNewChannel: cy.spy().as('createNewChannelSpy')
      }
    })

    cy.get('input[name="add-channel"]')
      .invoke('val')
      .then((val) => {
        const myVal = val
        expect(myVal).to.equal('')
        cy.get('[data-cy="channel-input-form"]').submit()
        cy.get('@createNewChannelSpy').should('not.have.been.called')
      })
  })
})
