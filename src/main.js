import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

import './assets/base.css'
import './assets/layout.css'
import './assets/components.css'
import './assets/pages/home.css'

// (опционально) добавим стили для каталога/товара ниже
import './assets/pages/catalog.css'
import './assets/pages/product.css'

createApp(App).use(router).mount('#app')
