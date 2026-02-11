<template>
  <section class="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
    <div class="max-w-7xl mx-auto">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900">
          BERITA PERMIKOMNAS
        </h2>
      </div>

      <!-- News Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <article 
          v-for="(news, index) in newsItems" 
          :key="index"
          class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
        >
          <!-- Image Container -->
          <div class="relative h-36 sm:h-40 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
            <!-- Placeholder image - ganti dengan foto berita asli -->
            <div class="absolute inset-0 bg-gray-300 flex items-center justify-center">
              <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            
            <!-- Overlay on hover -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <!-- Content -->
          <div class="p-4">
            <!-- Date -->
            <p class="text-xs font-semibold text-gray-600 mb-2">
              {{ news.date }}
            </p>

            <!-- Title -->
            <h3 class="text-base font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
              {{ news.title }}
            </h3>

            <!-- Excerpt -->
            <p class="text-gray-600 text-xs leading-relaxed line-clamp-3">
              {{ news.excerpt }}
            </p>
          </div>
        </article>
      </div>

      <!-- Load More Button -->
      <div class="text-center mt-12">
        <button 
          class="inline-flex items-center gap-2 px-8 py-3 bg-white text-gray-800 font-semibold rounded-full border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg transition-all duration-300 group"
          @click="loadMore"
        >
          <span>Lihat Berita Lainnya</span>
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Data berita
const newsItems = ref([
  {
    date: '24 Januari 2026',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei...',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    image: ''
  },
  {
    date: '24 Januari 2026',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei...',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    image: ''
  },
  {
    date: '24 Januari 2026',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei...',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    image: ''
  },
  {
    date: '24 Januari 2026',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei...',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    image: ''
  },
  {
    date: '24 Januari 2026',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei...',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    image: ''
  },
  {
    date: '24 Januari 2026',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei...',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    image: ''
  }
])

// Function untuk load more
const loadMore = () => {
  console.log('Load more news...')
  // Implementasi load more berita
}
</script>

<style scoped>
/* Line clamp utilities */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>