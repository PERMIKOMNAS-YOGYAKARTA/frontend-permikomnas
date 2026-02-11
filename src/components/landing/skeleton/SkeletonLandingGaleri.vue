<template>
  <div class="relative w-full h-screen bg-gray-200 animate-pulse overflow-hidden">
    <div class="absolute inset-0 flex flex-col items-center justify-center px-4">
      <div class="h-16 md:h-24 bg-gray-300 w-3/4 rounded-lg mb-4"></div>
      
      <div class="h-6 md:h-10 bg-gray-300 w-1/2 rounded-md mb-2"></div>
      <div class="h-8 md:h-12 bg-gray-300 w-1/3 rounded-md mb-8"></div>
      
      <div class="h-12 w-40 bg-gray-300 rounded-xl"></div>
    </div>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
      <div v-for="i in 4" :key="i" class="w-3 h-3 bg-gray-300 rounded-full"></div>
    </div>
  </div>
</template>