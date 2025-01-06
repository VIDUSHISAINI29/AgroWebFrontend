<script setup>
import Navbar from './Navbar.vue'
import AboutUs from '@/components/AboutUs.vue'
import Services from '@/components/Services.vue'

</script>

<template>
   <div class="tw-select-none tw-bg-[#e1fcc8]">
     <Navbar />
      <router-view />
      <Services />
      <AboutUs />
   </div>
</template>

<style scoped></style>
