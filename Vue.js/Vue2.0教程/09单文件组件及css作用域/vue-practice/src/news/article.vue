<template>
  <div>
    <h1>{{title_Article}}</h1>
    <p>发布时间：{{time | moment}}</p>
    <p>{{content_Article}}</p>
    <app-author></app-author>
  </div>
</template>

<script>
    import moment from "moment"         //引入moment时间插件
    import Author from "./author.vue"
    export default {
        name: "v-article",
        data() {
          return {
            title_Article : "This is a title",
            time : new Date(),    //获取当前时间
            content_Article : "My name is Jack, I want to be a better man."
          }
        },
        filters : {
          moment : function (value) {
            return moment(value).format("MMMM Do");      //调用moment时间插件来自定义设置时间格式
          }
        },
        components: {               //局部组件
          "app-author" : Author
        }
    }
</script>

<style scoped>      /* scoped 把css设置为局部样式 只在当前的组件有效*/
    *{
      color : red;
    }
</style>
