<template>
  <div>
    <h3>children1</h3>
    <h1>{{dataFromBrother}}</h1>
    <input type="text" v-model="toParentData">
    <button @click="dataToParent">toParent</button>
  </div>
</template>

<script>
  import bus from '../eventBus/bus'
    export default {
        name: "children2",
      data(){
          return {
            toParentData:'',
            dataFromBrother:''
          }
      },
      created(){
          bus.$on('toBrother',(data)=>{
            this.dataFromBrother = data;
          })
      },
      methods:{
        dataToParent(){
          this.$emit('toParent',this.toParentData)
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
