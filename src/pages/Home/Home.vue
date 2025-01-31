<script setup>
import axios from "axios";
import { onMounted, ref, watch } from "vue";
import Navbar from "@/layout/Navbar.vue";
import { doc } from "prettier";
import AboutUs from "@/components/AboutUs.vue";
import CropDetails from './CropDetails.vue'
import { useRoute } from "vue-router";

const route = useRoute();
const cropsRecord = ref([]);
const fetchRecord = async (url) => {
   try {
      const result = await axios.get(url);
      return result.data;
   } catch (error) {
      console.log("Error in fetching record", error);
   }
};

async function loadData() {
   cropsRecord.value = await fetchRecord(
      `${import.meta.env.VITE_BACKEND_URL}/crops-data`,
   );
   console.log("crops = ", cropsRecord.value);
}
async function assignAnimationDelay() {
   let i = 0;

   const totalItems = cropsRecord.value.length;
   for (i = 0; i < totalItems; i++) {
      const elemCrop = document.querySelector(`#item${i}`);
      const delay = `calc(30s / ${totalItems} * (${totalItems} - ${i + 1}) * -1)`;
      elemCrop.style.animationDelay = delay;
      elemCrop.style.left = `max(calc(200px * ${totalItems}), 100%)`;
   }
}
onMounted(async () => {
   await loadData();
   await assignAnimationDelay();
});
</script>

<template>
   <div class="tw-flex tw-w-full tw-flex-col tw-items-center tw-bg-[#e1fcc8]">
      <div
         v-if="!route.params.uri"
         class="tw-my-10 tw-flex tw-w-full tw-flex-col tw-justify-center tw-rounded-sm tw-p-5">
         <div
            :class="[
               'wrapper tw-relative tw-flex tw-h-[50vh] tw-w-full tw-items-center tw-gap-7 tw-overflow-hidden tw-p-2 tw-transition-transform',
               translateScale,
            ]">
            <div
               v-for="(crop, index) in cropsRecord"
               :id="'item' + index"
               :class="[
                  'item tw-z-10 tw-flex tw-h-[270px] tw-w-[200px] tw-flex-shrink-0 tw-flex-col tw-items-start tw-justify-center tw-rounded-sm tw-bg-[#3e7111] tw-p-1 tw-text-white',
               ]">
               <img
                  class="tw-h-48 tw-w-48 tw-cursor-pointer tw-p-1 tw-duration-500 hover:tw-scale-105"
                  :src="crop.image"
                  alt="cropImage" />
               <span class="tw-px-1 tw-text-sm tw-font-semibold">
                  {{ crop.crop }}
               </span>
               <span class="tw-text-wrap tw-px-1 tw-text-sm tw-font-semibold">
                  {{ crop.yieldTonsPerHectare.slice(0, 4) }} tons / hectare
               </span>
               <div class="tw-flex tw-w-full tw-justify-center">
                  <router-link
                     :to="`/home/${crop.index}`"
                     class="tw-my-2 tw-cursor-pointer tw-rounded-sm tw-bg-[radial-gradient(circle,_#3a434a,_#2a3238)] tw-p-1 tw-px-2 tw-text-[12px] tw-font-semibold tw-text-white">
                     Explore
                  </router-link>
               </div>
            </div>
         </div>
      </div>

      <div v-else>
         <CropDetails :uri="route.params.uri" />
      </div>
   </div>
</template>

<style scoped>
@keyframes scrollLeft {
   to {
      left: -200px;
   }
}
* {
   box-sizing: border-box;
}
.wrapper {
   mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1) 7%,
      rgba(0, 0, 0, 1) 93%,
      rgba(0, 0, 0, 0)
   );
}
.item {
   position: absolute;
   left: max(calc(200px * 8), 100%);
   animation-name: scrollLeft;
   animation-duration: 30s;
   animation-iteration-count: infinite;
   animation-timing-function: linear;
   height: 50vh;
}
</style>
<!-- 
<script>
import { getAuth0 } from "../../AuthServices.js";

export default {
   mounted() {
      const auth0 = getAuth0();

      // Handle Auth0 redirect callback
      auth0
         .handleRedirectCallback()
         .then(() => {
            // Get the target URL saved in the app state (where to redirect after login)
            const targetUrl = this.$route.query.targetUrl || "/"; // Default to home if no targetUrl

            // Redirect user to the originally requested page
            this.$router.push(targetUrl);
         })
         .catch((error) => {
            console.error("Error during Auth0 callback:", error);
            this.$router.push("/login"); // Fallback to login on error
         });
   },
};
</script> -->
