<template>
  <div class="flex items-center justify-between h-[90px] bg-primary-500 fixed top-0 left-0 w-full">
    <button to="home" class="text-white h-[60px] ml-10 text-2xl" @click="router.push('home')"
      >浩恩的個人網頁</button
    >
    <div class="flex gap-5 text-white p-10">
      <router-link
        class="w-[80px] h-[60px] leading-[60px] text-center text-lg rounded line"
        v-for="route in routes"
        activeClass="bg-primary-400"
        :to="route.path"
        :key="route.index"
        >{{ route.name }}</router-link
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';


const router = useRouter()
const routes = [
  {
    index: '0',
    path: 'home',
    name: '關於我',
  },
  {
    index: '1',
    path: 'portfolio',
    name: '作品集',
  },
  {
    index: '2',
    path: 'contact',
    name: '聯繫方式',
  },
]
</script>

<style scoped>

.line {
  position: relative;
  overflow: hidden;
}

.line::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 5px;
  background-color: white;
  border-radius: 2.5px;
  transition: width 0.3s ease-in-out;
}

.line:hover::after {
  width: 100%;
}
</style>
