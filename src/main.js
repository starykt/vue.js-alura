import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

Vue.use(VueResource) // puxando a importação do vue resource que foi instalado para o global Vue 
                     // para integração com API.

new Vue({
  el: '#app',
  render: h => h(App)
})
