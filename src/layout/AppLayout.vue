<script setup>
import Navbar from './Navbar.vue'
import AboutUs from '@/components/AboutUs.vue'
import Services from '@/components/Services.vue'
import Footer from './Footer.vue'

</script>

<template>
   <div class="tw-select-none tw-bg-[#e1fcc8]">
     <Navbar />
      <router-view />
      <Services />
      <AboutUs />
      <Footer />
   </div>
</template>

<style scoped></style>
