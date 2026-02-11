<template>
  <div
    class="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-gray-900"
  >
    <!-- Image Carousel -->
    <div class="relative w-full h-full">
      <!-- Images -->
      <transition-group name="fade" tag="div" class="relative w-full h-full">
        <div
          v-for="(image, index) in images"
          v-show="currentIndex === index"
          :key="index"
          class="absolute inset-0 w-full h-full"
        >
          <img
            :src="image.url"
            :alt="image.alt"
            class="w-full h-full object-cover"
          />
          <!-- Dark Overlay untuk kontras text -->
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70"></div>
        </div>
      </transition-group>
    </div>

    <!-- Navigation Arrows -->
    <button
      @click="previousSlide"
      class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/30 hover:bg-black/50 rounded-full backdrop-blur-sm transition duration-300 z-30 group"
    >
      <svg
        class="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2.5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>

    <button
      @click="nextSlide"
      class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/30 hover:bg-black/50 rounded-full backdrop-blur-sm transition duration-300 z-30 group"
    >
      <svg
        class="w-6 h-6 text-white group-hover:translate-x-1 transition-transform"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2.5"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Text Overlay - PERMIKOMNAS -->
    <div
      class="absolute inset-0 flex items-center justify-center z-10 pointer-events-auto"
    >
      <div class="text-center px-4 max-w-4xl mx-auto pointer-events-auto">
        <!-- Logo/Akronim -->
        <div class="mb-6 animate-fade-in-down">
          <h1
            class="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-2 tracking-tight"
          >
            PERMIKOMNAS
          </h1>
        </div>

        <!-- Kepanjangan -->
        <div class="animate-fade-in-up pointer-events-auto">
          <p
            class="text-lg md:text-2xl lg:text-3xl text-white font-light mb-2 leading-relaxed"
          >
            Perhimpunan Mahasiswa Informatika dan Komputer Nasional
          </p>
          <p class="text-xl md:text-3xl lg:text-4xl text-white font-semibold">
            Wilayah VIII Yogyakarta
          </p>
        </div>

        <!-- Optional CTA Button -->
        <div class="mt-8 animate-fade-in">
          <router-link
            to="/profile/sejarah"
            class="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            Tentang Kami
          </router-link>
        </div>
      </div>
    </div>

    <!-- Indicators/Dots -->
    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10"
    >
      <button
        v-for="(image, index) in images"
        :key="`dot-${index}`"
        @click="goToSlide(index)"
        :class="[
          'w-3 h-3 rounded-full transition-all duration-300',
          currentIndex === index
            ? 'bg-white w-8'
            : 'bg-white bg-opacity-50 hover:bg-opacity-75',
        ]"
        :aria-label="`Go to slide ${index + 1}`"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Props (optional - untuk customization)
const props = defineProps({
  autoPlay: {
    type: Boolean,
    default: true,
  },
  autoPlayInterval: {
    type: Number,
    default: 5000, // 5 detik
  },
});

// State
const currentIndex = ref(0);
let autoPlayTimer = null;

// Images data - Ganti dengan foto asli Permikomnas
const images = ref([
  {
    url: "https://picsum.photos/id/1/1920/1080", // Foto Laptop & Coding
    alt: "Permikomnas Tech Event",
  },
  {
    url: "https://picsum.photos/id/0/1920/1080", // Foto Laptop & Kerja
    alt: "Mahasiswa Informatika",
  },
  {
    url: "https://picsum.photos/id/20/1920/1080", // Foto Desktop Setup
    alt: "Community Meeting",
  },
  {
    url: "https://picsum.photos/id/180/1920/1080", // Foto Laptop & Kopi (Study vibe)
    alt: "Workshop Permikomnas",
  },
]);

// Methods
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

const previousSlide = () => {
  currentIndex.value =
    currentIndex.value === 0 ? images.value.length - 1 : currentIndex.value - 1;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

const startAutoPlay = () => {
  if (props.autoPlay) {
    autoPlayTimer = setInterval(() => {
      nextSlide();
    }, props.autoPlayInterval);
  }
};

const stopAutoPlay = () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
  }
};

// Lifecycle
onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  stopAutoPlay();
});

// Pause autoplay saat hover (optional)
const handleMouseEnter = () => {
  stopAutoPlay();
};

const handleMouseLeave = () => {
  startAutoPlay();
};
</script>

<style scoped>
/* 1. Transition untuk Container Images */
/* Menggunakan cubic-bezier untuk gerakan yang melambat secara halus di akhir */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Slide masuk dari kanan dan sedikit membesar (Zoom-in effect) */
.fade-enter-from {
  opacity: 0;
  transform: translateX(100%) scale(1.1);
}

/* Slide keluar ke arah kiri */
.fade-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

/* 2. Animasi Teks (Keyframes) */
/* Efek teks muncul dari atas dengan sedikit blur */
@keyframes reveal-down {
  0% {
    opacity: 0;
    transform: translateY(-40px);
    filter: blur(12px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

/* Efek teks muncul dari bawah */
@keyframes reveal-up {
  0% {
    opacity: 0;
    transform: translateY(40px);
    filter: blur(12px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

/* Animasi memudar standar */
@keyframes simple-fade {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* 3. Utility Classes untuk Animasi Teks */
/* PERMIKOMNAS Header */
.animate-fade-in-down {
  animation: reveal-down 1.4s cubic-bezier(0.22, 1, 0.36, 1) both;
}

/* Deskripsi & Wilayah (dengan delay agar muncul bergantian) */
.animate-fade-in-up {
  animation: reveal-up 1.4s cubic-bezier(0.22, 1, 0.36, 1) 0.4s both;
}

/* Tombol CTA (muncul paling akhir) */
.animate-fade-in {
  animation: simple-fade 1.5s ease-out 0.8s both;
}

/* 4. Hover States & Extra Styling */
/* Pastikan gambar selalu menutupi area tanpa distorsi */
img {
  will-change: transform, opacity;
  transition: transform 10s linear; /* Efek zoom pelan saat gambar diam */
}

/* Menambah kontras pada dot navigasi yang aktif */
.bg-white.w-8 {
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.6);
}
</style>