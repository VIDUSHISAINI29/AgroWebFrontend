<script setup>
import axios from "axios";
import { onMounted, ref, watch } from "vue";
import Navbar from '@/layout/Navbar.vue'

const westCropsRecord = ref([]);
const eastCropsRecord = ref([]);
const northCropsRecord = ref([]);
const southCropsRecord = ref([]);
const translateScale = ref('tw-translate-x-0');
const rightCicked = ref(0);
const leftClicked = ref(0);
const fetchRecord = async(url) => {
  try {
    const result = await axios.get(url);
    return result.data;
  } catch (error) {
    console.log("Error in fetching record", error);
  }
}

async function loadData(){
  westCropsRecord.value = await fetchRecord(`${import.meta.env.VITE_BACKEND_URL}/east-data`);
  eastCropsRecord.value = await fetchRecord(`${import.meta.env.VITE_BACKEND_URL}/west-data`);
  northCropsRecord.value = await fetchRecord(`${import.meta.env.VITE_BACKEND_URL}/north-data`);
  southCropsRecord.value = await fetchRecord(`${import.meta.env.VITE_BACKEND_URL}/south-data`);
  console.log('crops = ', westCropsRecord.value );

}
onMounted(async () => {
  await loadData()
})

function translateSlideRight(direction){
  const elem = document.querySelector('#item');

  if(direction === 'right' && leftClicked.value != 0 ){
    rightCicked.value++;
    const rightMoveValue = 224;
    translateScale.value = `tw-translate-x-[-${224*rightCicked.value}px]` ;
    console.log("clicked", translateScale.value);
    elem.style.tra = `translateX(-${224*rightCicked.value})`;
  }
  if(direction === 'left'){
    leftClicked.value++;
    translateScale.value = `tw-translate-x-[${224*leftClicked.value}px]`;
    console.log("clicked", translateScale.value); 
    elem.style.transform = `translateX(${224*rightCicked.value})`;
}
  
}

</script>
<template>
    <div class="tw-flex tw-flex-col tw-bg-[#defcc2] tw-items-center tw-w-full">
    
       <div class="tw-bg-[#3e7111] tw-my-10 tw-overflow-visible tw-w-[92.5%] tw-rounded-sm tw-relative tw-justify-center  tw-flex tw-flex-col tw-p-5">
         <span class="tw-font-bold tw-text-lg tw-px-3 tw-text-white">Crops Of West</span>
         <i @click="translateSlideRight('left')" class="ri-arrow-left-s-line tw-z-10 tw-cursor-pointer tw-flex tw-justify-center -tw-left-4 tw-items-center tw-rounded-[50%] tw-font-semibold tw-text-2xl tw-bg-white tw-absolute tw-w-10 tw-h-10 tw-text-[#3e7111]"></i>
 
         <div :class="['tw-flex tw-w-full tw-overflow-hidden tw-items-center tw-transition-transform    tw-gap-7  tw-p-2', translateScale]">
          
           <div v-for="(crop, index) in westCropsRecord" id="item" :class="['tw-bg-white tw-rounded-sm  tw-transform  tw-p-1 tw-overflow-hidden tw-flex-shrink-0 tw-flex tw-justify-center tw-flex-col tw-items-start', translateScale ]">
           <img class="tw-w-48 tw-h-48 hover:tw-scale-105  tw-duration-500 tw-p-1 tw-cursor-pointer" :src="crop.image" alt="cropImage">
           <span class="tw-text-sm tw-px-1 tw-font-semibold tw-text-[#3e7111]">{{ crop.crop }}</span>
           <span class="tw-text-sm tw-px-1 tw-font-semibold tw-text-wrap tw-text-[#3e7111]">{{ crop.yieldTonsPerHectare.slice(0,4) }}  tons / hectare</span>
           <div class="tw-w-full tw-flex tw-justify-center">
                <span class="tw-text-[12px] tw-font-semibold tw-bg-[radial-gradient(circle,_#3a434a,_#2a3238)]  tw-p-1 tw-rounded-sm tw-my-2 tw-px-2  tw-text-white">Explore</span>
            </div>
        </div>
         </div>
         <i @click="translateSlideRight('right')" class="ri-arrow-right-s-line tw-z-10 tw-cursor-pointer tw-flex tw-justify-center -tw-right-4 tw-items-center tw-rounded-[50%] tw-font-semibold tw-text-2xl tw-bg-white tw-absolute tw-w-10 tw-h-10 tw-text-[#3e7111]"></i>
       </div>
 
       <div class="tw-bg-[#3e7111] tw-my-10 tw-overflow-visible tw-w-[92.5%] tw-rounded-sm tw-relative tw-justify-center  tw-flex tw-flex-col tw-p-5">
         <span class="tw-font-bold tw-text-lg tw-px-3 tw-text-white">Crops Of East</span>
         <i @click="translateSlideRight('left')" class="ri-arrow-left-s-line tw-z-10 tw-cursor-pointer tw-flex tw-justify-center -tw-left-4 tw-items-center tw-rounded-[50%] tw-font-semibold tw-text-2xl tw-bg-white tw-absolute tw-w-10 tw-h-10 tw-text-[#3e7111]"></i>
 
         <div :class="['tw-flex tw-w-full tw-overflow-hidden tw-items-center tw-transition-transform    tw-gap-7  tw-p-2', translateScale]">
          
           <div v-for="(crop, index) in eastCropsRecord" id="item" :class="['tw-bg-white tw-rounded-sm tw-transform  tw-p-1 tw-overflow-hidden tw-flex-shrink-0 tw-flex tw-justify-center tw-flex-col tw-items-start', translateScale ]">
           <img class="tw-w-48 tw-h-48 hover:tw-scale-105  tw-duration-500 tw-p-1 tw-cursor-pointer" :src="crop.image" alt="cropImage">
           <span class="tw-text-sm tw-font-semibold tw-px-1 tw-text-[#3e7111]">{{ crop.crop }}</span>
           <span class="tw-text-sm tw-px-1 tw-font-semibold tw-text-wrap tw-text-[#3e7111]">{{ crop.yieldTonsPerHectare.slice(0,4) }}  tons / hectare</span>
           <div class="tw-w-full tw-flex tw-justify-center">
                <span class="tw-text-[12px] tw-font-semibold tw-bg-[radial-gradient(circle,_#3a434a,_#2a3238)]  tw-p-1 tw-rounded-sm tw-my-2 tw-px-2  tw-text-white">Explore</span>
            </div>

           </div>
         </div>
         <i @click="translateSlideRight('right')" class="ri-arrow-right-s-line tw-z-10 tw-cursor-pointer tw-flex tw-justify-center -tw-right-4 tw-items-center tw-rounded-[50%] tw-font-semibold tw-text-2xl tw-bg-white tw-absolute tw-w-10 tw-h-10 tw-text-[#3e7111]"></i>
       </div>
       <div class="tw-bg-[#3e7111] tw-my-10 tw-overflow-visible tw-w-[92.5%] tw-rounded-sm tw-relative tw-justify-center  tw-flex tw-flex-col tw-p-5">
         <span class="tw-font-bold tw-text-lg tw-px-3 tw-text-white">Crops Of North</span>
         <i @click="translateSlideRight('left')" class="ri-arrow-left-s-line tw-z-10 tw-cursor-pointer tw-flex tw-justify-center -tw-left-4 tw-items-center tw-rounded-[50%] tw-font-semibold tw-text-2xl tw-bg-white tw-absolute tw-w-10 tw-h-10 tw-text-[#3e7111]"></i>
 
         <div :class="['tw-flex tw-w-full tw-overflow-hidden tw-items-center tw-transition-transform    tw-gap-7  tw-p-2', translateScale]">
          
           <div v-for="(crop, index) in northCropsRecord" id="item" :class="['tw-bg-white tw-rounded-sm  tw-transform  tw-p-1 tw-overflow-hidden tw-flex-shrink-0 tw-flex tw-justify-center tw-flex-col tw-items-start', translateScale ]">
           <img class="tw-w-48 tw-h-48 hover:tw-scale-105  tw-duration-500 tw-p-1 tw-cursor-pointer" :src="crop.image" alt="cropImage">
           <span class="tw-text-sm tw-font-semibold tw-px-1 tw-text-[#3e7111]">{{ crop.crop }}</span>
           <span class="tw-text-sm tw-px-1 tw-font-semibold tw-text-wrap tw-text-[#3e7111]">{{ crop.yieldTonsPerHectare.slice(0,4) }}  tons / hectare</span>
           <div class="tw-w-full tw-flex tw-justify-center">
                <span class="tw-text-[12px] tw-font-semibold tw-bg-[radial-gradient(circle,_#3a434a,_#2a3238)]  tw-p-1 tw-rounded-sm tw-my-2 tw-px-2  tw-text-white">Explore</span>
            </div>

           </div>
         </div>
         <i @click="translateSlideRight('right')" class="ri-arrow-right-s-line tw-z-10 tw-cursor-pointer tw-flex tw-justify-center -tw-right-4 tw-items-center tw-rounded-[50%] tw-font-semibold tw-text-2xl tw-bg-white tw-absolute tw-w-10 tw-h-10 tw-text-[#3e7111]"></i>
       </div>
       <div class="tw-bg-[#3e7111] tw-my-10 tw-overflow-visible tw-w-[92.5%] tw-relative tw-rounded-sm tw-justify-center  tw-flex tw-flex-col tw-p-5">
         <span class="tw-font-bold tw-text-lg tw-px-3 tw-text-white">Crops Of South</span>
         <i @click="translateSlideRight('left')" class="ri-arrow-left-s-line tw-z-10 tw-cursor-pointer tw-flex tw-justify-center -tw-left-4 tw-items-center tw-rounded-[50%] tw-font-semibold tw-text-2xl tw-bg-white tw-absolute tw-w-10 tw-h-10 tw-text-[#3e7111]"></i>
 
         <div :class="['tw-flex tw-w-full tw-overflow-hidden tw-items-center tw-transition-transform    tw-gap-7  tw-p-2', translateScale]">
          
           <div v-for="(crop, index) in southCropsRecord" id="item" :class="['tw-bg-white tw-rounded-sm tw-transform  tw-p-1 tw-overflow-hidden tw-flex-shrink-0 tw-flex tw-justify-center tw-flex-col tw-items-start', translateScale ]">
           <img class="tw-w-48 tw-h-48 hover:tw-scale-105  tw-duration-500 tw-p-1 tw-cursor-pointer" :src="crop.image" alt="cropImage">
           <span class="tw-text-sm tw-font-semibold tw-px-1 tw-text-[#3e7111]">{{ crop.crop }}</span>
           <span class="tw-text-sm tw-px-1 tw-font-semibold tw-text-wrap tw-text-[#3e7111]">{{ crop.yieldTonsPerHectare.slice(0,4) }}  tons / hectare</span>
           <div class="tw-w-full tw-flex tw-justify-center">
                <span class="tw-text-[12px] tw-font-semibold tw-bg-[radial-gradient(circle,_#3a434a,_#2a3238)]  tw-p-1 tw-rounded-sm tw-my-2 tw-px-2  tw-text-white">Explore</span>
            </div>
           </div>
         </div>
         <i @click="translateSlideRight('right')" class="ri-arrow-right-s-line tw-z-10 tw-cursor-pointer tw-flex tw-justify-center -tw-right-4 tw-items-center tw-rounded-[50%] tw-font-semibold tw-text-2xl tw-bg-white tw-absolute tw-w-10 tw-h-10 tw-text-[#3e7111]"></i>
       </div>
       <div class="tw-h-screen"></div>
    </div>
 </template> 
 