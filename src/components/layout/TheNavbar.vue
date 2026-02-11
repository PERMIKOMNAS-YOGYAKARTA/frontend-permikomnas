<template>
  <nav class="bg-white shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <router-link to="/" class="flex-shrink-0 flex items-center">
          <div class="w-10 h-10 rounded-lg flex items-center justify-center">
            <img src="@/assets/logo.png" alt="Logo" class="object-contain" />
          </div>
        </router-link>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <!-- Home -->
          <router-link
            to="/"
            class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition duration-150"
            active-class="text-blue-600"
          >
            Home
          </router-link>

          <!-- Profile dengan Dropdown -->
          <div
            class="relative"
            @mouseenter="isProfileDropdownOpen = true"
            @mouseleave="isProfileDropdownOpen = false"
          >
            <button
              class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition duration-150 flex items-center"
            >
              Profile
              <svg
                :class="{ 'rotate-180': isProfileDropdownOpen }"
                class="ml-1 w-4 h-4 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <!-- Dropdown Menu -->
            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 scale-95"
              enter-to-class="opacity-100 scale-100"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100 scale-100"
              leave-to-class="opacity-0 scale-95"
            >
              <div
                v-show="isProfileDropdownOpen"
                class="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50"
              >
                <div class="py-1">
                  <router-link
                    to="/profile/sejarah"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-150"
                    active-class="bg-blue-50 text-blue-600"
                  >
                    Sejarah
                  </router-link>
                  <router-link
                    to="/profile/visi-misi"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-150"
                    active-class="bg-blue-50 text-blue-600"
                  >
                    Visi & Misi
                  </router-link>
                  <router-link
                    to="/profile/filosofi-logo"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-150"
                    active-class="bg-blue-50 text-blue-600"
                  >
                    Filosofi Logo
                  </router-link>
                  <router-link
                    to="/profile/filosfi-kabinet"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-150"
                    active-class="bg-blue-50 text-blue-600"
                  >
                    Filosofi Logo Kabinet
                  </router-link>
                </div>
              </div>
            </transition>
          </div>

          <!-- Merchant -->
          <router-link
            to="/merchant"
            class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition duration-150"
            active-class="text-blue-600"
          >
            Merchant
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            aria-label="Toggle menu"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                v-if="!isMobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <div v-show="isMobileMenuOpen" class="md:hidden border-t border-gray-200">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link
            to="/"
            @click="closeMobileMenu"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-150"
            active-class="text-blue-600 bg-blue-50"
          >
            Home
          </router-link>

          <!-- Profile Mobile Dropdown -->
          <div>
            <button
              @click="toggleProfileDropdown"
              class="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-150 flex items-center justify-between"
            >
              Profile
              <svg
                :class="{ 'rotate-180': isProfileMobileOpen }"
                class="w-4 h-4 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 max-h-0"
              enter-to-class="opacity-100 max-h-40"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100 max-h-40"
              leave-to-class="opacity-0 max-h-0"
            >
              <div
                v-show="isProfileMobileOpen"
                class="pl-4 space-y-1 overflow-hidden"
              >
                <router-link
                  to="/profile/sejarah"
                  @click="closeMobileMenu"
                  class="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition duration-150"
                  active-class="text-blue-600 bg-blue-50"
                >
                  Sejarah
                </router-link>
                <router-link
                  to="/profile/visi-misi"
                  @click="closeMobileMenu"
                  class="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition duration-150"
                  active-class="text-blue-600 bg-blue-50"
                >
                  Visi Misi
                </router-link>

                <router-link
                  to="/profile/filosofi-logo"
                  @click="closeMobileMenu"
                  class="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition duration-150"
                  active-class="text-blue-600 bg-blue-50"
                >
                  Filosofi Logo
                </router-link>
                <router-link
                  to="/profile/filosofi-kabinet"
                  @click="closeMobileMenu"
                  class="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition duration-150"
                  active-class="text-blue-600 bg-blue-50"
                >
                  Filosofi Kabinet
                </router-link>
              </div>
            </transition>
          </div>

          <router-link
            to="/merchant"
            @click="closeMobileMenu"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-150"
            active-class="text-blue-600 bg-blue-50"
          >
            Merchant
          </router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// State management
const isMobileMenuOpen = ref(false);
const isProfileDropdownOpen = ref(false);
const isProfileMobileOpen = ref(false);

// Methods
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  // Reset profile dropdown saat mobile menu ditutup
  if (!isMobileMenuOpen.value) {
    isProfileMobileOpen.value = false;
  }
};

const toggleProfileDropdown = () => {
  isProfileMobileOpen.value = !isProfileMobileOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  isProfileMobileOpen.value = false;
};

// Close mobile menu when clicking outside
const handleClickOutside = (event) => {
  const nav = event.target.closest("nav");
  if (!nav && isMobileMenuOpen.value) {
    closeMobileMenu();
  }
};

// Close mobile menu on route change
const handleRouteChange = () => {
  closeMobileMenu();
};

// Lifecycle hooks
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
  window.addEventListener("popstate", handleRouteChange);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
  window.removeEventListener("popstate", handleRouteChange);
});
</script>

<style scoped>
/* Custom transitions jika diperlukan */
</style>
