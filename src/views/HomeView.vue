<script setup>
import { onMounted } from 'vue'
import { useLandingStore } from '@/stores/landingStore';
import SkeletonHome from '@/components/landing/skeleton/SkeletonHome.vue'

import LandingGaleri from '@/components/landing/LandingGaleri.vue';
import Greeting from '@/components/landing/Greeting.vue';
import Artikel from '@/components/landing/Artikel.vue';
import MediaPartner from '@/components/landing/MediaPartner.vue';
import Members from '@/components/landing/Members.vue';

const landingStore = useLandingStore();

onMounted(() => {
    landingStore.isLoaded = false;
    landingStore.fetchAllHomeData();
});
</script>

<template>
    <main>
    <!-- <transition name="fade-fast" mode="out-in"> -->
      <SkeletonHome v-if="landingStore.isLoading && !landingStore.isLoaded" />

      
      <div v-show="!landingStore.isLoading || landingStore.isLoaded">
        <LandingGaleri :data="landingStore.galeri" />
        <Greeting :data="landingStore.coordinator" />
        <Artikel :data="landingStore.articles" />
        <MediaPartner :data="landingStore.partners" />
        <Members :data="landingStore.members" />
      </div>
    <!-- </transition> -->
  </main>
</template>