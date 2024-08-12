<template>
  <div class=" w-full bg-red-500">
    <div class="ww-375  bg-green-500">asdfasdf</div>
    <van-button type="primary" >Primary</van-button>
    <van-button type="primary" size="large">Large</van-button>
    <van-button type="primary" size="normal">Normal</van-button>
    <van-button type="primary" size="small">Small</van-button>
    <van-button type="primary" size="mini">Mini</van-button>
    <div class="banner">
      <h1>new use : {{ website.name }}</h1>
      <p>introduce: {{ website.description }}</p>
    </div>
    <span class="text-sm">查看文本大小</span>
    <div class="flex justify-between">

    <div class="w-187.5 hh-23 bg-green-500 bd-1">
       a half container

    </div>
    <div class="w-187.5 hh-23 bg-orange-500">

    </div>
    </div>
  </div>
</template>
<script setup lang="ts">

  // import { useWebsiteStore } from '@/stores/website'
const website = useWebsiteStore()
onMounted( async()=>{
  if(process.client){
    await callOnce(website.fetch)
  }
})

</script>
<style lang='scss' scoped>
.banner{
    width: 375px;
    background-color: orange;
    font-size: 12px;
   }

</style>
