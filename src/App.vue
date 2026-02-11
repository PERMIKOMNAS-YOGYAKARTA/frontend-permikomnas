<script setup>
import TheNavbar from './components/layout/TheNavbar.vue'
import TheFooter from './components/layout/TheFooter.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    
    <TheNavbar />

    <main class="flex-grow bg-gray-50">
      <RouterView />
    </main>

    <TheFooter />
    
  </div>
</template>

<style scoped></style>
