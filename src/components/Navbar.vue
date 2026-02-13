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
  if (!isMenuOpen.value) isProfileOpen.value = false
}
</script>

<template>
  <nav class="w-full bg-[#641D1A] text-white sticky top-0 z-50 shadow-md">
    <div class="mx-auto flex h-20 w-full max-w-360 items-center justify-between px-6">
      
      <router-link to="/" class="flex items-center gap-3">
        <div class="bg-white rounded-full p-1 w-12 h-12 flex items-center justify-center overflow-hidden">
          <img src="@/assets/logo.png" alt="Icon" class="w-full h-auto object-contain" />
        </div>
        <div class="flex flex-col leading-tight font-bold tracking-tight text-lg">
          <span>Permikomnas</span>
          <span>Yogyakarta</span>
        </div>
      </router-link>

      <div class="hidden lg:flex items-center gap-10 text-lg font-medium">
        <router-link to="/" class="hover:text-gray-300 transition-colors duration-300">Beranda</router-link>

        <div class="group relative">
          <button class="flex cursor-pointer items-center gap-2 hover:text-gray-300 transition-colors duration-300 py-6">
            Profil
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-300 group-hover:rotate-180">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </button>

          <div class="invisible absolute top-full left-0 w-64 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 z-50">
            <div class="mt-0 flex flex-col overflow-hidden rounded-b-lg bg-[#7A2421] shadow-xl border-t border-white/10">
              <router-link 
                v-for="item in profilMenus" 
                :key="item.path" 
                :to="item.path"
                class="px-6 py-4 text-base hover:bg-[#8B2D29] transition-colors duration-300 border-b border-white/5 last:border-0"
              >
                {{ item.name }}
              </router-link>
            </div>
          </div>
        </div>

        <router-link to="/merchandise" class="hover:text-gray-300 transition-colors duration-300">Merchandise</router-link>
      </div>

      <button @click="toggleMenu" class="lg:hidden p-2 focus:outline-none cursor-pointer">
        <div class="relative w-6 h-5">
          <span :class="['absolute block w-full h-0.5 bg-white transition-all duration-300', isMenuOpen ? 'top-2 rotate-45' : 'top-0']"></span>
          <span :class="['absolute block w-full h-0.5 bg-white transition-all duration-300 top-2', isMenuOpen ? 'opacity-0' : 'opacity-100']"></span>
          <span :class="['absolute block w-full h-0.5 bg-white transition-all duration-300', isMenuOpen ? 'top-2 -rotate-45' : 'top-4']"></span>
        </div>
      </button>
    </div>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-2 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-2 opacity-0"
    >
      <div v-if="isMenuOpen" class="lg:hidden absolute top-full left-0 w-full bg-[#7A2421] shadow-2xl border-t border-white/10 z-40">
        <div class="flex flex-col py-4">
          <router-link to="/" @click="isMenuOpen = false" class="px-8 py-4 text-lg font-medium hover:bg-[#8B2D29]">Beranda</router-link>
          <div class="flex flex-col">
            <button @click="isProfileOpen = !isProfileOpen" class="flex items-center justify-between px-8 py-4 text-lg font-medium hover:bg-[#8B2D29]">
              Profil
              <svg :class="{'rotate-180': isProfileOpen}" class="transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
            <div v-if="isProfileOpen" class="bg-[#641D1A]/50 flex flex-col border-l-4 border-white/20 ml-4">
              <router-link v-for="item in profilMenus" :key="item.path" :to="item.path" @click="isMenuOpen = false" class="px-8 py-3 text-base hover:bg-[#8B2D29]">
                {{ item.name }}
              </router-link>
            </div>
          </div>
          <router-link to="/merchandise" @click="isMenuOpen = false" class="px-8 py-4 text-lg font-medium hover:bg-[#8B2D29]">Merchandise</router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>