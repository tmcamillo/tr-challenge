import SquareIcon from './SquareIcon.vue'

describe('<SquareIcon />', () => {
  it('shoul render a default icon if no props are passed', () => {
    cy.mount(SquareIcon)
    cy.get('[data-cy="square-icon"]').children().should('have.class', 'fa-envelope')
  })

  it('shoul render the correct icon if props are passed', () => {
    cy.mount(SquareIcon, {
      props: {
        iconName: 'fa-solid fa-phone'
      }
    })
    cy.get('[data-cy="square-icon"]').children().should('have.class', 'fa-phone')
  })

  it('shoul render the correct icon if props are passed', () => {
    cy.mount(SquareIcon, {
      props: {
        iconName: 'fa-brands fa-whatsapp'
      }
    })
    cy.get('[data-cy="square-icon"]').children().should('have.class', 'fa-whatsapp')
  })
})
