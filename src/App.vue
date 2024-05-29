<template>
  <Header />
  <div class="bg-gray-100 h-screen pt-[90px]">
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import Header from './views/template/Header.vue'
</script>
