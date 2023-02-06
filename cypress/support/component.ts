/* eslint-disable no-unused-vars */
// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount } from 'cypress/vue'
import '../../src/index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faGripVertical, faPhone, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

library.add(faGripVertical, faPhone, faEnvelope, faSearch, faWhatsapp)

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
  namespace Cypress {
    interface Chainable {
      mount(component: any, options?: Record<string, any>): Chainable<any>
    }
  }
}

Cypress.Commands.add('mount', (component, options = {}) => {
  // Setup options object
  options.extensions = options.extensions || {}
  options.extensions.plugins = options.extensions.plugins || []
  options.extensions.components = options.extensions.components || {}

  // Register global components
  options.extensions.components['font-awesome-icon'] = FontAwesomeIcon

  return mount(component, options)
})
