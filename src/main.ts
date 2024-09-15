import { createApp } from 'vue'
import './style.css'
import Cytus from './Cytus.vue'
import router from './router'
import i18n from '../i18n'

createApp(Cytus).use(router).use(i18n).mount('#cytus')
