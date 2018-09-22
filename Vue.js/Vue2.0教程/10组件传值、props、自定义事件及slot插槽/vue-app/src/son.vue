<template>
  <div>
    <div>My son, lastName：{{fatherLastname}}</div>
  </div>
</template>

<script>
    export default {
        name: "v-son",
        props:{            //声明一个属性对象接收参数
          fatherLastname: {     //属性名写出横杠连接的形式（father-lastname），js里面要写出驼峰形式（fatherLastname）
            type : String,
            required : true     //必须值
          }
        }
    }
</script>

<style scoped>

</style>
