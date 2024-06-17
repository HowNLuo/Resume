<template>
  <Header />
  <div class="bg-gray-100 min-h-screen py-[90px]">
    <router-view />
  </div>
  <Footer />
</template>

<script lang="ts" setup>
import Header from './views/template/Header.vue';
import Footer from './views/template/Footer.vue';
</script>
