<script setup>
import { ref } from 'vue'

const profilMenus = [
  { name: 'Sejarah Permikomnas', path: '/sejarah' },
  { name: 'Visi Misi Permikomnas', path: '/visi-misi' },
  { name: 'Filosofi Logo Permikomnas', path: '/filosofi-logo' },
  { name: 'Filosofi Logo Kabinet', path: '/filosofi-logo-kabinet' }
]
</script>

<template>
  <nav class="w-full bg-[#641D1A] text-white">
    <div class="mx-auto flex h-[100px] w-full max-w-[1440px] items-center justify-between px-4 py-4">
      
      <router-link to="/" class="flex items-center">
        <img src="@/assets/logo.png" alt="Logo PERMIKOMNAS" class="h-[60px] w-auto" />
      </router-link>

      <div class="flex items-center gap-10 text-lg font-medium">
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
    </div>
  </nav>
</template>