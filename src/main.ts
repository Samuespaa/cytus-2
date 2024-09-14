import { createApp } from 'vue'
import './style.css'
import Cytus from './Cytus.vue'
import router from './router'

createApp(Cytus).use(router).mount('#cytus')
