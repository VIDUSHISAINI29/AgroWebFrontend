<script setup>
import axios from "axios";
import { onMounted, ref, watch } from "vue";
import Navbar from '@/layout/Navbar.vue'

const cropsRecord = ref([]);
const fetchRecord = async() => {
  try {
    const result = await axios.get('http://localhost:4024/crops-data');
    return result.data;
  } catch (error) {
    console.log("Error in fetching record", error);
  }
}
onMounted(() => {
  cropsRecord.value = fetchRecord();
  console.log('crops = ', cropsRecord.value );
  
})

</script>
 
<template>
   <div class="tw-flex tw-flex-col tw-bg-gray-100 tw-items-center tw-w-full">
      <div class="wineGlassTable tw-w-full tw-flex tw-flex-col  tw-items-end tw-h-[80vh]">
        <Navbar />
        <div class="tw-w-full tw-flex tw-justify-end tw-items-end tw-h-[50vh]">
          
         <span class="text  tw-block tw-w-[570px] tw-m-3 tw-text-[4rem]">
          Fields whisper stories of resilience, growth, and hope.
         </span>
        </div>
      </div>
      <div class="tw-bg-purple-200 tw-w-11/12 tw-flex tw-flex-col tw-p-2">
        <span class="tw-font-bold tw-text-lg tw-text-[#3e7111]">Crops Of West</span>
        <div v-for="(crop, index) in cropsRecord">
          <img :src="crop.image" alt="">
          <span>{{ crop.crop }}</span>
        </div>
      </div>
   </div>
</template> 

<style scoped>
.wineGlassTable{
   background-image: url('/images/field.jpg');
   background-size: cover;
   background-repeat: no-repeat;

}
.text{
   -webkit-text-stroke: 1px rgb(67, 144, 0); 
   color: transparent;
   animation: outline-animation 3s ease-in-out;
   transition: all;
   line-height: 100%;
}


</style> 