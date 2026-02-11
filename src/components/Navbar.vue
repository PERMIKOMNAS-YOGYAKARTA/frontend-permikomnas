<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false) 
const isProfileOpen = ref(false)

const profilMenus = [
  { name: 'Sejarah Permikomnas', path: '/sejarah' },
  { name: 'Visi Misi Permikomnas', path: '/visi-misi' },
  { name: 'Filosofi Logo Permikomnas', path: '/filosofi-logo' },
  { name: 'Filosofi Logo Kabinet', path: '/filosofi-logo-kabinet' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="w-full bg-[#641D1A] text-white sticky top-0 z-50">
    <div class="mx-auto flex h-[100px] w-full max-w-[1440px] items-center justify-between px-4 py-4">
      
      <router-link to="/" class="flex items-center z-50">
        <img src="@/assets/logo.png" alt="Logo PERMIKOMNAS" class="h-[60px] w-auto" />
      </router-link>

      <div class="hidden lg:flex items-center gap-10 text-lg font-medium">
        <router-link to="/" class="hover:text-gray-300 transition-colors duration-300">Beranda</router-link>

        <div class="group relative py-4">
          <button class="flex cursor-pointer items-center gap-2 hover:text-gray-300 transition-colors duration-300">
            Profil
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-300 group-hover:rotate-180">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </button>

          <div class="invisible absolute top-full left-0 w-[280px] opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 z-50">
            <div class="mt-2 flex flex-col overflow-hidden rounded-lg bg-[#7A2421] shadow-xl border border-white/10">
              <router-link 
                v-for="item in profilMenus" 
                :key="item.path" 
                :to="item.path"
                class="px-6 py-4 text-base hover:bg-[#8B2D29] transition-colors duration-300"
              >
                {{ item.name }}
              </router-link>
            </div>
          </div>
        </div>

        <router-link to="/merchandise" class="hover:text-gray-300 transition-colors duration-300">Merchandise</router-link>
      </div>

      <button @click="toggleMenu" class="lg:hidden p-2 z-50 cursor-pointer focus:outline-none">
        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <div 
        :class="[isMenuOpen ? 'translate-x-0' : 'translate-x-full']"
        class="fixed inset-0 bg-[#641D1A] flex flex-col pt-[120px] px-8 gap-6 text-xl font-medium transition-transform duration-300 lg:hidden z-40"
      >
        <router-link to="/" @click="isMenuOpen = false" class="hover:text-gray-300">Beranda</router-link>
        
        <div class="flex flex-col gap-4">
          <button @click="isProfileOpen = !isProfileOpen" class="flex items-center justify-between w-full hover:text-gray-300">
            Profil
            <svg :class="{'rotate-180': isProfileOpen}" class="transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </button>
          <div v-if="isProfileOpen" class="flex flex-col gap-4 pl-4 border-l border-white/20 transition-all duration-300">
            <router-link 
              v-for="item in profilMenus" 
              :key="item.path" 
              :to="item.path" 
              @click="isMenuOpen = false"
              class="text-base hover:text-gray-300"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>

        <router-link to="/merchandise" @click="isMenuOpen = false" class="hover:text-gray-300">Merchandise</router-link>
      </div>
    </div>
  </nav>
</template>