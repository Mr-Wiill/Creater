<template>
    <div>
      <!--添加slot（插槽）标签后，父组件可以在子组件的标签内添加内容，并覆盖子组件slot标签里的内容-->
      <!-- 当有多个slot标签时，给slot标签添加name，这样父组件里添加的内容会插入到对象name的插槽里 -->
      <slot name="one">{{firstSlot}}</slot>
      <slot none="two">{{secondSlot}}</slot>
    </div>
</template>

<script>
    export default {
        name: "v-slot",
        data(){
          return {
            firstSlot : " I am fist slot.",
            secondSlot : "I am second slot."
          }
        }
    }
</script>

<style scoped>

</style>
