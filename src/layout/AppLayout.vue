<script setup>
import Navbar from './Navbar.vue'
import AboutUs from '@/components/AboutUs.vue'
import Services from '@/components/Services.vue'
import Footer from './Footer.vue'
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
   <div class="tw-select-none tw-bg-[#e1fcc8]">
     <Navbar />
      <router-view />
      <div v-if="!route.params.uri">
         <Services />
      <AboutUs />
      </div>
      <Footer />
   </div>
</template>

<style scoped></style>
