<template>
  <section class="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        <!-- Content Side -->
        <div class="space-y-6">
          <div>
            <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Sambutan Koordinator Wilayah VIII
            </h2>
            <h3 class="text-xl sm:text-2xl font-semibold text-blue-600">
              Permikomnas Yogyakarta
            </h3>
          </div>

          <div
            class="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
          ></div>

          <p class="text-gray-700 leading-relaxed text-base sm:text-lg">
            {{ coordinator.message }}
          </p>

          <div class="pt-4">
            <p
              class="text-gray-800 font-semibold italic flex items-center gap-2"
            >
              <span class="text-blue-600">—</span>
              {{ coordinator.name }}, {{ coordinator.year }}
              <span class="text-blue-600">—</span>
            </p>
          </div>
        </div>

        <!-- Hero Image Side -->
        <div
          class="relative rounded-3xl min-h-[300px] md:min-h-[400px] lg:min-h-[450px] overflow-hidden shadow-2xl group"
        >
          <!-- Hero Image Background -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600"
          >
            <!-- Placeholder untuk foto hero - ganti dengan tag img untuk foto asli -->
            <div
              class="absolute inset-0 bg-cover bg-center bg-no-repeat"
              :style="{ backgroundImage: `url(${coordinator.photoUrl})` }"
            ></div>
            <!-- Overlay gradient -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
            ></div>
            <div
              class="absolute inset-0 bg-gradient-to-br from-blue-600/40 to-indigo-600/40 mix-blend-multiply"
            ></div>
          </div>

          <!-- Animated Pattern Overlay -->
          <div class="absolute inset-0 opacity-10">
            <div
              class="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"
            ></div>
            <div
              class="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"
            ></div>
          </div>

          <!-- Content Overlay -->
          <div class="absolute inset-0 flex items-end p-6 sm:p-8 lg:p-10">
            <div
              class="transform transition-transform duration-500 group-hover:translate-y-[-8px]"
            >
              <!-- Badge or Title -->
              <div
                class="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-4"
              >
                <p class="text-white text-sm font-medium">
                  Koordinator Wilayah VIII
                </p>
              </div>

              <!-- Name -->
              <h4
                class="text-white text-2xl sm:text-3xl font-bold mb-2 drop-shadow-lg"
              >
                {{ coordinator.name }}
              </h4>

              <!-- Role -->
              <p
                class="text-white/90 text-sm sm:text-base font-medium drop-shadow-md"
              >
                Permikomnas Yogyakarta
              </p>
            </div>
          </div>

          <!-- Decorative Elements -->
          <div
            class="absolute top-6 right-6 w-3 h-3 bg-white rounded-full animate-ping"
          ></div>
          <div
            class="absolute top-8 right-8 w-2 h-2 bg-white/60 rounded-full"
          ></div>

          <div
            class="absolute top-1/4 left-6 w-2 h-2 bg-white/50 rounded-full animate-pulse"
          ></div>

          <!-- Quote Icon (Optional) -->
          <div
            class="absolute top-8 left-8 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
          >
            <svg
              class="w-12 h-12 sm:w-16 sm:h-16 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import api from "@/services/api";

// Data untuk sambutan
const coordinator = ref({
  title: "Sambutan Koordinator Wilayah VIII",
  organization: "Permikomnas Yogyakarta",
  message: "",
  name: "",
  year: new Date().getFullYear(),
  // Ganti URL ini dengan foto koordinator yang sebenarnya
  photoUrl: "",
});

onMounted(async () => {
  const response = await api.getGreeting();
  const data = response.data.data;
  coordinator.value.message = data.greetingMessage;
  coordinator.value.name = data.greetingName;
  coordinator.value.photoUrl = data.greetingPhoto;
});
</script>

<style scoped>
@keyframes blob {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

@keyframes pulse-slow {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.05);
  }
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes bounce-slow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 3s ease-in-out infinite;
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}
</style>
