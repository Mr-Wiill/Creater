import Vue from 'vue'
import App from './App.vue'
import Father from './father.vue'

Vue.component("app-father", Father);
new Vue({
  el: '#app',
  render: h => h(App)
});
