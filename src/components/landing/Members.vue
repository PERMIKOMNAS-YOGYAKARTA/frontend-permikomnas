<template>
  <section class="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900">
          HIMPUNAN TERGABUNG
        </h2>
      </div>

      <div
        class="flex flex-wrap justify-center items-center gap-6 sm:gap-10 lg:gap-14"
      >
        <div
          v-for="(hima, index) in himpunan"
          :key="hima.id || index"
          class="group cursor-pointer flex flex-col items-center"
        >
          <div
            class="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
          >
            <img
              v-if="hima.logoUrl"
              :src="hima.logoUrl"
              :alt="hima.name"
              class="w-full h-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md"
            />

            <div
              v-else
              class="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg"
            >
              <span class="text-white text-lg font-bold">{{ index + 1 }}</span>
            </div>
          </div>

          <span
            class="mt-2 text-[10px] sm:text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium uppercase tracking-tighter"
          >
            {{ hima.name.split(" ")[0] }}
          </span>
        </div>
      </div>

      <div class="text-center mt-12">
        <p
          class="text-gray-500 text-sm font-medium bg-white inline-block px-6 py-2 rounded-full shadow-sm"
        >
          Total
          <span class="text-blue-600 font-bold">{{ totalLogos }}</span> himpunan
          tergabung
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useLandingStore } from "@/stores/landingStore";

const landingStore = useLandingStore();

// Data himpunan - tinggal tambah object baru untuk nambah logo otomatis
const totalLogos = computed(() => landingStore.members?.length || 0);

// Atau pastikan datanya adalah array dulu
const himpunan = computed(() => landingStore.members || []);
</script>

<style scoped>
/* Custom hover animation */
</style>
