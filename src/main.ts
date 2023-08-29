import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import BaseCard from '../src/components/UI/BaseCard.vue'
import BaseContainer from '../src/components/UI/BaseContainer.vue'
import BaseButton from '../src/components/UI/BaseButton.vue'
const app = createApp(App)
app.component('BaseContainer', BaseContainer)
app.component('BaseCard', BaseCard)
app.component('BaseButton', BaseButton)

app.mount('#app')
