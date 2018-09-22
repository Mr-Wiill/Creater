<template>
  <p>
    <button @click="share">点击分享</button>
  </p>
</template>

<script>
    export default {
        name: "share",
        methods: {
          share(){
            this.$emit("shared",{     /*自定义事件，shared为事件名，$emit用于触发事件，另外$on用于监听事件*/
              name : "jack"       //需要传的值
            });
          }
        }

    }
</script>

<style scoped>

</style>
