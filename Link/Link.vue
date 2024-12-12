<script setup lang="ts">
import { ref, onMounted } from "vue";
import wx from "weixin-js-sdk-ts";

type EnvVersionTypes = "release" | "develop" | "trial"; // 正式版 | 开发版 | 体验版

const envVersion = ref<EnvVersionTypes>("develop");


// 是否微信浏览器
function isWechatBrowser() {
    const ua = navigator.userAgent.toLowerCase()
    return ua.indexOf('micromessenger') !== -1
}

// 是否微信小程序
function isWechatMiniProgram(): boolean {
    const ua = navigator.userAgent.toLowerCase()
    return ua.indexOf('micromessenger') !== -1 && ua.indexOf('miniprogram') !== -1 || (window as any)._wxjsenvironment === 'miniprogram'
}

function getEnvVersion() {
  if (
    window.location.hostname === "cxwx-dev.cpic.com.cn" ||
    window.location.hostname === "localhost"
  ) {
    envVersion.value = "develop";
  } else if (window.location.hostname === "cxwx-sit.cpic.com.cn") {
    envVersion.value = "trial";
  } else {
    envVersion.value = "release";
  }
}

onMounted(() => {
  getEnvVersion();
});

const { data }: any = defineProps({
  data: Object,
});

function handleLaunchFn() {
  if (data.ghCode) {
    // 跳小程序
    console.log("launch");
    if (isWechatMiniProgram()) {
      // 小程序里跳小程序
      wx.miniProgram.navigateTo({
        url: data.path,
      });
    }
  } else {
    window.location.href = data.url;
  }
}

function handleErrorFn() {
  console.log("error");
}
</script>

<template>
  <div class="launch-btn" @click="handleLaunchFn">
    <template v-if="data.ghCode">
      <wx-open-launch-weapp
        :username="data.ghCode"
        :path="data.path"
        :env-version="envVersion"
        @launch="handleLaunchFn"
        @error="handleErrorFn"
      >
        <div is="vue:script" type="text/wxtag-template">
          <div is="vue:style">
            .launch { opacity: 0; width: 100%; height: 100%; position: absolute;
            top: 0; left: 0; }
          </div>
          <div class="launch"></div>
        </div>
      </wx-open-launch-weapp>
    </template>
  </div>
</template>

<style lang="less" scoped>
.launch-btn {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
