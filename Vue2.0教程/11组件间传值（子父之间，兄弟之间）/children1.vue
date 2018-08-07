<template>
  <div>
    <h3>children1</h3>
    <h1>{{getData}}</h1>      <!--父组件传过来的值，在这展示-->
    <input type="text" v-model="toBrother" >
    <button @click="dataToBrother">toBrother</button>
  </div>
</template>

<script>
  import bus from '../eventBus/bus'
    export default {
        name: "children",
      props:['getData'],    //子组件自定义一个属性
      data(){
          return {
            toBrother:''
          }
      },
      methods:{
        dataToBrother(){
          bus.$emit('toBrother',this.toBrother)
        }
      }
    }
</script>

<style scoped>
  h1{
     height: 50px;
    color: darkred;
   }
</style>
