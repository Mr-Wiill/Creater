import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'    /*引入jQuery*/
import test from "./test.vue"

Vue.component("app-component", test);     /*初始化一个全局组件*/
new Vue({
  el: '#app',
  render: h => h(App)     //渲染一个视图（vue2.0语法）

  /*
    render: h => h(App)

    等价于

    render: h => {
        return h(App);
    }

    等价于

    render: function(h) {
        return h(App);
    }

    等价于

    render: function(createElement) {
        return createElement(App);
    }
  */

});
