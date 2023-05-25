<script setup lang="ts">
import { useRequest } from 'alova'
import BasicButton from '@/components/BasicButton/index.vue'
import { getInfoConfig } from '@/api'

const title = ref('Hello')

const userStore = useUserStore()
const router = useRouter()

function handleRouter() {
  userStore.changeName()
  router.pushTab({ path: '/pages/test/index' })
}

async function handleRequest() {
  const data = await getInfoConfig({
    key: 'xiaoying.loanproduct.h5.faceAuthority',
  })
  console.log(data)
}
</script>

<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">
        {{ title }} {{ userStore.name }}
      </text>
    </view>

    <BasicButton @click="handleRouter">
      测试路由
    </BasicButton>

    <BasicButton @click="handleRequest">
      测试请求
    </BasicButton>
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
