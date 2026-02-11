<template>
  <section class="py-16 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-center mb-12">
        <div class="h-8 w-48 bg-gray-200 rounded-md animate-pulse"></div>
      </div>

      <div class="relative flex overflow-hidden">
        <div class="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div class="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

        <div class="flex animate-skeleton-slide">
          <div class="flex gap-8 items-center px-4">
            <div 
              v-for="i in 8" 
              :key="i"
              class="flex-shrink-0 w-40 h-28 bg-gray-100 border border-gray-50 rounded-xl flex flex-col items-center justify-center space-y-3"
            >
              <div class="h-10 w-10 bg-gray-200 rounded-full animate-pulse"></div>
              <div class="h-3 w-20 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes skeleton-slide {
  0% { transform: translateX(0); }
  100% { transform: translateX(-30%); } /* Geser sedikit agar user tahu ini slider */
}

.animate-skeleton-slide {
  animation: skeleton-slide 15s linear infinite;
  display: flex;
  width: max-content;
}
</style>