<template>
    <div>
      <p>{{ father }} <span> lastName：{{lastName}} </span></p>

      <app-son :father-lastname="lastName" ></app-son>   <!--定义了一个属性并赋值-->

      <p>分享次数：{{shareTimes}}</p>

      <!--调用自定义的事件：点击这个按钮后会触发自定义事件，自定义事件又触发父组件事件tooShare-->
      <app-share @shared="toShare($event,10)"></app-share>

      <app-slot>
        <p name="one">我是父组件的p标签1</p>
        <p name="two">我是父组件的p标签2</p>
      </app-slot>

    </div>
</template>

<!-- 父组件与子组件之间传参 -->

<!-- 父传子：在子组件标签里定义一个属性，把值传给这个属性；在子组件里声明一个属性数组，接收传来的值 -->

<script>
    import Son from './son.vue'
    import Share from "./share.vue"
    import Slot from "./slot.vue"

    export default {
        name: "v-father",
      data() {
          return {
            father: "I'm your father.",
            lastName : "chen",
            shareTimes : 0
          }
      },
      components: {
          "app-son": Son,
          "app-share" : Share,
          "app-slot" : Slot
      },
      methods: {
          toShare(event, val) {            //es6语法定义函数
            console.log(event,val);      //父组件接收子组件参数
            this.shareTimes++;
          }
      }
    }
</script>

<style scoped>

</style>
