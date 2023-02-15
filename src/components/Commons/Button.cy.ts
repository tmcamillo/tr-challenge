import Button from './Button.vue'

describe('<Button />', () => {
  it('should render the black button and the correct label', () => {
    cy.mount(Button, {
      props: {
        bgColor: 'black'
      },
      slots: {
        default: 'Hello there!'
      }
    })
    cy.get('[data-cy="button"]')
      .should('have.text', 'Hello there!')
      .and('have.class', 'bg-zinc-900')
  })

  it('should render the transparent button and the correct label', () => {
    cy.mount(Button, {
      props: {
        bgColor: 'transparent'
      },
      slots: {
        default: 'Hi all!'
      }
    })
    cy.get('[data-cy="button"]').should('have.text', 'Hi all!').and('have.class', 'bg-transparent')
  })

  it('should render the white button and the correct label', () => {
    cy.mount(Button, {
      props: {
        bgColor: 'white'
      },
      slots: {
        default: 'Bye everyone!'
      }
    })
    cy.get('[data-cy="button"]').should('have.text', 'Bye everyone!').and('have.class', 'bg-white')
  })

  it('should render the default label, when any is passed', () => {
    cy.mount(Button, {
      props: {
        bgColor: 'white'
      }
    })
    cy.get('[data-cy="button"]').should('have.text', 'click me')
  })

  it('should render a label, when it is passed through props', () => {
    cy.mount(Button, {
      props: {
        bgColor: 'white',
        label: 'new label'
      }
    })
    cy.get('[data-cy="button"]').should('have.text', 'new label')
  })
})
