<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
   <div>
      <div class="wineGlassTable tw-h-[80vh]"></div>
   </div>
</template>

<style scoped>
.wineGlassTable{
   background-image: url('/images/greenLeaves.jpg');
   background-size: cover;
   background-repeat: no-repeat;

}
</style>
