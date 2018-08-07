<template>
  <div class="container">
    <div class="header">
      <h1>parent</h1>
      <input v-model="toChildren" type="text"/>
      <h1 class="getData">{{getChildren}}</h1>
    </div>
    <div class="main">
      <div class="children1">
        <!--父传子：通过自定义属性绑定向子组件传的值-->
        <Children1 :getData="toChildren"></Children1>
      </div>
      <div class="children2">
        <!--子传父：通过自定义事件绑定一个方法，用于接收子组件传的值-->
        <Children2 @toParent="getChildrenData($event)"></Children2>
      </div>
    </div>
  </div>
</template>

<script>
  import Children1 from './children1'
  import Children2 from './children2'
    export default {
        name: "parent",
      components:{
        Children1,
        Children2
      },
      data(){
          return {
            toChildren:'',
            getChildren:''
          }
      },
      methods:{
          getChildrenData(data){
            this.getChildren = data;
          }
      }
    }
</script>

<style scoped>
  body{
    background: #eee;
  }
  .container{
    width: 100%;
  }
  .header{
    width: 100%;
  }
  .main{
    width: 985px;
    margin: 50px auto;
  }
  .children1,.children2{
    width: 40%;
    height: 300px;
    margin: 0 20px;
    display: inline-block;
    background: #909399;
    color: #fff;
  }
  .getData{
    color: darkred;
    height: 50px;
  }
</style>
