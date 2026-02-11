<template>
  <section class="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <!-- Title -->
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900">
          OUR PARTNER
        </h2>
      </div>

      <!-- Carousel -->
      <div
        ref="wrapper"
        class="overflow-hidden w-full cursor-grab active:cursor-grabbing select-none"
        @mouseenter="pauseAuto"
        @mouseleave="resumeAuto"
        @mousedown="startDrag"
        @touchstart="startDrag"
      >
        <div
          ref="track"
          class="flex gap-8 items-center w-max"
        >
          <div
            v-for="(partner, index) in duplicatedPartners"
            :key="index"
            class="flex-shrink-0 w-32 h-24 sm:w-40 sm:h-28 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-all duration-300 hover:scale-105"
          >
            <img
              :src="partner.logoUrl"
              :alt="partner.name"
              class="max-w-full max-h-full object-contain pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from "vue";
import { useLandingStore } from "@/stores/landingStore";

const landingStore = useLandingStore();
const partners = computed(() => landingStore.partners);

// duplicate for seamless loop
const duplicatedPartners = computed(() => [
  ...partners.value,
  ...partners.value,
]);

const wrapper = ref(null);
const track = ref(null);

let animationId = null;
let position = 0;
let velocity = 0;
let autoSpeed = -0.4; // auto scroll speed
let isAuto = true;
let isDragging = false;
let startX = 0;
let lastX = 0;

// MAIN LOOP
const animate = () => {
  if (!track.value) return;

  if (isAuto && !isDragging) {
    velocity += autoSpeed * 0.02;
  }

  position += velocity;

  const halfWidth = track.value.scrollWidth / 2;

  // seamless reset
  if (position <= -halfWidth) {
    position += halfWidth;
  } else if (position >= 0) {
    position -= halfWidth;
  }

  // friction (momentum decay)
  velocity *= 0.95;

  track.value.style.transform = `translateX(${position}px)`;

  animationId = requestAnimationFrame(animate);
};

// AUTO CONTROL
const pauseAuto = () => {
  isAuto = false;
};

const resumeAuto = () => {
  if (!isDragging) {
    isAuto = true;
  }
};

// DRAG START
const startDrag = (e) => {
  isDragging = true;
  isAuto = false;
  velocity = 0;

  startX = e.type.includes("mouse")
    ? e.pageX
    : e.touches[0].pageX;

  lastX = startX;

  window.addEventListener("mousemove", onDrag);
  window.addEventListener("mouseup", stopDrag);
  window.addEventListener("touchmove", onDrag);
  window.addEventListener("touchend", stopDrag);
};

// DRAG MOVE
const onDrag = (e) => {
  if (!isDragging) return;

  const currentX = e.type.includes("mouse")
    ? e.pageX
    : e.touches[0].pageX;

  const delta = currentX - lastX;

  position += delta;
  velocity = delta;

  lastX = currentX;
};

// DRAG END
const stopDrag = () => {
  isDragging = false;

  window.removeEventListener("mousemove", onDrag);
  window.removeEventListener("mouseup", stopDrag);
  window.removeEventListener("touchmove", onDrag);
  window.removeEventListener("touchend", stopDrag);

  isAuto = true;
};

// LIFECYCLE
onMounted(() => {
  animationId = requestAnimationFrame(animate);
});

onBeforeUnmount(() => {
  cancelAnimationFrame(animationId);
});
</script>
