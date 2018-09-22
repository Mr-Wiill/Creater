import Vue from 'vue'
import App from './App.vue'
import Article from "./news/article.vue"

Vue.component("app-article", Article);
new Vue({
  el: '#app',
  render: h => h(App),
})
