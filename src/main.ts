import { createApp } from 'vue'
import ViewUIPlus from 'view-ui-plus'
import App from './App.vue'
import { createPinia } from 'pinia'
import 'view-ui-plus/dist/styles/viewuiplus.css'

const app = createApp(App)
app.use(ViewUIPlus).use(createPinia())

app.mount('#app')
