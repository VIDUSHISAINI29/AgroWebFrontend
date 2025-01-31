<script setup>
import axios from "axios";
import { createApp, onMounted, ref, watch } from "vue";
import Navbar from '@/layout/Navbar.vue'
import { doc } from "prettier";
import {useRoute} from "vue-router"

const route = useRoute();
const eastRecord = ref([]);
const westRecord = ref([]);
const southRecord = ref([]);
const northRecord = ref([]);
const fetchRecord = async(url) => {
  try {
    const result = await axios.get(url);
    return result.data;
  } catch (error) {
    console.log("Error in fetching record", error);
  }
}

async function loadData(){
 
  eastRecord.value = await fetchRecord(`${import.meta.env.VITE_BACKEND_URL}/east-data`);
  westRecord.value = await fetchRecord(`${import.meta.env.VITE_BACKEND_URL}/west-data`);
  southRecord.value = await fetchRecord(`${import.meta.env.VITE_BACKEND_URL}/south-data`);
  northRecord.value = await fetchRecord(`${import.meta.env.VITE_BACKEND_URL}/north-data`);

}


onMounted(async () => {
  await loadData();
})
  


</script>
<template>
    <div v-if="!route.params.uri" class="tw-flex tw-flex-col tw-bg-[#defcc2] tw-items-center tw-w-full">
    
       <div class="tw-bg-[#3e7111] banner  tw-overflow-hidden tw-w-full tw-h-[90vh] tw-text-center  tw-relative">
       
        
 
         <div :style="`--quantity:${eastRecord.length}`"  class="tw-absolute tw-w-[200px] tw-h-[310px] tw-top-[10%] slider ">
          
           <div v-for="(crop, index) in eastRecord" :style="`--position:${index+1}`" :class="['tw-bg-white item   tw-p-1 tw-overflow-hidden ', translateScale ]">
           <img class="tw-w-48 tw-h-44 hover:tw-scale-105  tw-duration-500 tw-p-1 tw-cursor-pointer" :src="crop.image" alt="cropImage">
           <span class="tw-text-sm tw-px-1 tw-font-semibold tw-text-[#3e7111]">{{ crop.crop }}</span>
           <span class="tw-text-sm tw-px-1 tw-font-semibold tw-text-wrap tw-text-[#3e7111]">{{ crop.yieldTonsPerHectare.slice(0,4) }}  tons / hectare</span>
           <div class="tw-w-full tw-flex tw-justify-center">
                <router-link :to="`/region-wise/${crop.index}`" class="tw-text-[12px] tw-font-semibold tw-bg-[radial-gradient(circle,_#3a434a,_#2a3238)]  tw-p-1 tw-rounded-sm tw-my-2 tw-px-2  tw-text-white tw-cursor-pointer">Explore</router-link>
            </div>
        </div>
      
         </div>
         <span class="tw-font-bold tw-text-xl  tw-text-white tw-absolute tw-left-[43%] tw-bottom-4 tw-my-4">Crops Of East Region</span>
       
       </div>
       <div class=" banner  tw-overflow-hidden tw-w-full tw-h-[90vh] tw-text-center  tw-relative">
         <div :style="`--quantity:${westRecord.length}`"  class="tw-absolute tw-w-[200px] tw-h-[310px] tw-top-[10%] slider ">
          
           <div v-for="(crop, index) in westRecord" :style="`--position:${index+1}`" :class="['tw-bg-[#3e7111] item   tw-p-1 tw-overflow-hidden ', translateScale ]">
           <img class="tw-w-48 tw-h-44 hover:tw-scale-105  tw-duration-500 tw-p-1 tw-cursor-pointer" :src="crop.image" alt="cropImage">
           <span class="tw-text-sm tw-px-1 tw-font-semibold tw-text-white">{{ crop.crop }}</span>
           <span class="tw-text-sm tw-px-1 tw-font-semibold tw-text-wrap tw-text-white">{{ crop.yieldTonsPerHectare.slice(0,4) }}  tons / hectare</span>
           <div class="tw-w-full tw-flex tw-justify-center">
                <span class="tw-text-[12px] tw-font-semibold tw-bg-[radial-gradient(circle,_#3a434a,_#2a3238)]  tw-p-1 tw-rounded-sm tw-my-2 tw-px-2  tw-text-white tw-cursor-pointer">Explore</span>
            </div>
        </div>
      
         </div>
         <span class="tw-font-bold tw-text-xl  tw-text-[#3e7111] tw-absolute tw-left-[43%] tw-bottom-4 tw-my-4">Crops Of West Region</span>
       </div>

       <div class="tw-bg-[#3e7111] banner  tw-overflow-hidden tw-w-full tw-h-[90vh] tw-text-center  tw-relative">
       
        
 
       <div :style="`--quantity:${northRecord.length}`"  class="tw-absolute tw-w-[200px] tw-h-[310px] tw-top-[10%] slider ">
        
         <div v-for="(crop, index) in northRecord" :style="`--position:${index+1}`" :class="['tw-bg-white item   tw-p-1 tw-overflow-hidden ', translateScale ]">
         <img class="tw-w-48 tw-h-44 hover:tw-scale-105  tw-duration-500 tw-p-1 tw-cursor-pointer" :src="crop.image" alt="cropImage">
         <span class="tw-text-sm tw-px-1 tw-font-semibold tw-text-[#3e7111]">{{ crop.crop }}</span>
         <span class="tw-text-sm tw-px-1 tw-font-semibold tw-text-wrap tw-text-[#3e7111]">{{ crop.yieldTonsPerHectare.slice(0,4) }}  tons / hectare</span>
         <div class="tw-w-full tw-flex tw-justify-center">
              <router-link :to="``" class="tw-text-[12px] tw-font-semibold tw-bg-[radial-gradient(circle,_#3a434a,_#2a3238)]  tw-p-1 tw-rounded-sm tw-my-2 tw-px-2  tw-text-white tw-cursor-pointer">Explore</router-link>
          </div>
      </div>
    
       </div>
       <span class="tw-font-bold tw-text-xl  tw-text-white tw-absolute tw-left-[43%] tw-bottom-4 tw-my-4">Crops Of North Region</span>
     
     </div>
     
     <div class=" banner  tw-overflow-hidden tw-w-full tw-h-[90vh] tw-text-center  tw-relative">
         <div :style="`--quantity:${southRecord.length}`"  class="tw-absolute tw-w-[200px] tw-h-[310px] tw-top-[10%] slider ">
          
           <div v-for="(crop, index) in southRecord" :style="`--position:${index+1}`" :class="['tw-bg-[#3e7111] item   tw-p-1 tw-overflow-hidden ', translateScale ]">
           <img class="tw-w-48 tw-h-44 hover:tw-scale-105  tw-duration-500 tw-p-1 tw-cursor-pointer" :src="crop.image" alt="cropImage">
           <span class="tw-text-sm tw-px-1 tw-font-semibold tw-text-white">{{ crop.crop }}</span>
           <span class="tw-text-sm tw-px-1 tw-font-semibold tw-text-wrap tw-text-white">{{ crop.yieldTonsPerHectare.slice(0,4) }}  tons / hectare</span>
           <div class="tw-w-full tw-flex tw-justify-center">
                <span class="tw-text-[12px] tw-font-semibold tw-bg-[radial-gradient(circle,_#3a434a,_#2a3238)]  tw-p-1 tw-rounded-sm tw-my-2 tw-px-2  tw-text-white tw-cursor-pointer">Explore</span>
            </div>
        </div>
      
         </div>
         <span class="tw-font-bold tw-text-xl  tw-text-[#3e7111] tw-absolute tw-left-[43%] tw-bottom-4 tw-my-4">Crops Of South Region</span>
       </div>

 
     
    </div>

    <div v-else>
         <CropDetails :uri="route.params.uri" />
      </div>
 </template> 
 
 <style scoped>
.banner .slider{
  left: calc(50% - 100px);
  transform-style: preserve-3d;
  transform:  perspective(1600px);
  animation: autoRun 40s linear infinite;
 
}

@keyframes autoRun {
  from{
    transform: perspective(1600px) rotateX(-0deg) rotateY(0deg);
  }
  to{
    transform: perspective(1600px) rotateX(-0deg) rotateY(360deg);
  }
}
.item{
    position: absolute;
    inset: 0 0 0 0 ;
    top: 20%;
    transform: 
        rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg))
        translateZ(550px);

}
/* .banner .slider .item img{
    width: 98%;
    height: 85%;
    object-fit: cover;
} */
</style>