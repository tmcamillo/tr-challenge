import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faGripVertical, faPhone, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

library.add(faGripVertical, faPhone, faEnvelope, faSearch, faWhatsapp)

const pinia = createPinia()
createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(pinia).mount('#app')
