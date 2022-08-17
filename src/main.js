import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './registerServiceWorker'
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')