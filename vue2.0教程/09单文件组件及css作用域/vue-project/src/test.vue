<!-- 一个单文件组件 -->
<template>
    <div class="alert alert-info">{{msg}}</div>     <!-- 内容 -->
</template>

<script>
    export default {      /* 组件的设置 */
        name: "test",
        data() {
          return {
            msg : "hello world"
          }
        }

    }
</script>

