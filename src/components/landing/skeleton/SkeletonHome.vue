<template>
  <div class="flex flex-col gap-0">
      <SkeletonLandingGaleri />
      <SkeletonGreeting />
      <SkeletonPartner />
    
    <section class="py-16 px-8 bg-gray-50">
      <div class="max-w-6xl mx-auto space-y-4">
        <div class="h-10 bg-gray-200 rounded-lg w-48 animate-pulse"></div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="i in 3" :key="i" class="h-64 bg-gray-200 rounded-2xl animate-pulse"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import SkeletonGreeting from './SkeletonGreeting.vue'
import SkeletonLandingGaleri from './SkeletonLandingGaleri.vue'
import SkeletonPartner from './SkeletonPartner.vue';
</script>