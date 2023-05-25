<script setup lang="ts">
const title = ref('Hello Test')
</script>

<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">
        {{ title }}
      </text>
    </view>
    <button
      class="
      py-2
      px-4
      font-semibold
      rounded-lg
      shadow-md
      text-white
      bg-green-500
      hover:bg-green-700
      border-none
      cursor-pointer"
    >
      测试unocss
    </button>
    <button
      p="y-2 x-4"
      font="semibold"
      shadow="lg"
      text="white"
      bg="green-500 hover:green-700"
      border="rounded-lg none "
      cursor="pointer"
    >
      测试presetAttributify
    </button>
    <div class="i-ic-baseline-arrow-downward text-3xl bg-green-500" />
  </view>
</template>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
