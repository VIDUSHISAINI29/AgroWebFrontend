<script setup>
import axios from "axios";
import { createApp, onMounted, ref, watch } from "vue";
import Navbar from '@/layout/Navbar.vue'
import { doc } from "prettier";
import {useRoute} from "vue-router"

const route = useRoute();
const barleyRecord = ref([]);
const maizeRecord = ref([]);
const soybeanRecord = ref([]);
const cottonRecord = ref([]);
const riceRecord = ref([]);
const wheatRecord = ref([]);
const translateScale = ref('tw-translate-x-0');
const rightCicked = ref(0);
const leftClicked = ref(0);
const dragging = ref(null);
const isDragging = ref(false);
const translateSlideRight = ref(null);
const translateSlideLeft = ref(null);

const fetchRecord = async(url) => {
  try {
    const result = await axios.get(url);
    return result.data;
  } catch (error) {
    console.log("Error in fetching record", error);
  }
}

async function loadData(){
  barleyRecord.value = await fetchRecord(`${import.meta.env.VITE_BACKEND_URL}/barley-data`);
  maizeRecord.value = await fetchRecord(`${import.meta.env.VITE_BACKEND_URL}/maize-data`);
  soybeanRecord.value = await fetchRecord(`${import.meta.env.VITE_BACKEND_URL}/soybean-data`);
  cottonRecord.value = await fetchRecord(`${import.meta.env.VITE_BACKEND_URL}/cotton-data`);
  riceRecord.value = await fetchRecord(`${import.meta.env.VITE_BACKEND_URL}/rice-data`);
  wheatRecord.value = await fetchRecord(`${import.meta.env.VITE_BACKEND_URL}/wheat-data`);
  console.log('crops = ', barleyRecord.value );

}
function getCarousel(){
  const carouselElem = document.querySelector('#carousel')
  const carouselElem2 = document.querySelector('#item').offsetWidth
  console.log('card = ', carouselElem2);
  
 dragging.value = (e) => {
  if(!isDragging.value) return ;
    console.log('page position = ', e.pageX);
    carouselElem.scrollLeft = e.pageX;   
}
translateSlideLeft.value = (carousel) => {
  const whichCarousel = document.querySelector(`${carousel}`)
  console.log('which carousel',whichCarousel);
  
  whichCarousel.scrollLeft += 214; 
  whichCarousel.style.scrollBehavior = 'smooth';
}
translateSlideRight.value = (carousel) => {
  const whichCarousel = document.querySelector(`${carousel}`)
  whichCarousel.scrollLeft -= 214; 
  whichCarousel.style.scrollBehavior = 'smooth';
}
}

onMounted(async () => {
  await loadData();
  getCarousel();
})

</script>
<template>
    <div v-if="!route.params.uri" class="tw-flex tw-flex-col tw-bg-[#defcc2] tw-items-center tw-w-full">
    
       <div class="tw-bg-[#3e7111] wrapper tw-my-10 tw-overflow-visible tw-w-[92.5%] tw-rounded-sm tw-relative tw-justify-center  tw-flex tw-flex-col tw-p-5">
         <span class="tw-font-bold tw-text-lg tw-px-3 tw-text-white">Crops Of Maize</span>
         <i  @click="translateSlideLeft('#carousel1')" class="ri-arrow-left-s-line tw-z-10 tw-cursor-pointer tw-flex tw-justify-center -tw-left-4 tw-items-center tw-rounded-[50%] tw-font-semibold tw-text-2xl tw-bg-white tw-absolute tw-w-10 tw-h-10 tw-text-[#3e7111]"></i>
 
         <div id="carousel1" @mouseup="isDragging = false" @mousedown="isDragging = true;" @mousemove="dragging" :class="['tw-flex tw-select-none tw-cursor-grab tw-w-full tw-overflow-hidden  tw-items-center tw-transition-transform    tw-gap-7  tw-p-2', translateScale]">
          
           <div v-for="(crop, index) in maizeRecord" id="item" :class="['tw-bg-white card tw-rounded-sm  tw-transform  tw-p-1 tw-overflow-hidden tw-flex-shrink-0 tw-flex tw-justify-center tw-flex-col tw-items-start', translateScale ]">
           <img class="tw-w-48 tw-h-48 hover:tw-scale-105  tw-duration-500 tw-p-1 tw-cursor-pointer" :src="crop.image" alt="cropImage">
           <span class="tw-text-sm tw-px-1 tw-font-semibold tw-text-[#3e7111]">{{ crop.crop }}</span>
           <span class="tw-text-sm tw-px-1 tw-font-semibold tw-text-wrap tw-text-[#3e7111]">{{ crop.yieldTonsPerHectare.slice(0,4) }}  tons / hectare</span>
           <div class="tw-w-full tw-flex tw-justify-center">
                <span class="tw-text-[12px] tw-font-semibold tw-bg-[radial-gradient(circle,_#3a434a,_#2a3238)]  tw-p-1 tw-rounded-sm tw-my-2 tw-px-2  tw-text-white">Explore</span>
            </div>
        </div>
         </div>
         <i @click="translateSlideRight('#carousel1')" class="ri-arrow-right-s-line tw-z-10 tw-cursor-pointer tw-flex tw-justify-center -tw-right-4 tw-items-center tw-rounded-[50%] tw-font-semibold tw-text-2xl tw-bg-white tw-absolute tw-w-10 tw-h-10 tw-text-[#3e7111]"></i>
       </div>
       <div class="tw-bg-[#3e7111] wrapper tw-my-10 tw-overflow-visible tw-w-[92.5%] tw-rounded-sm tw-relative tw-justify-center  tw-flex tw-flex-col tw-p-5">
         <span class="tw-font-bold tw-text-lg tw-px-3 tw-text-white">Crops Of Barley</span>
         <i  @click="translateSlideLeft('#carousel2')" class="ri-arrow-left-s-line tw-z-10 tw-cursor-pointer tw-flex tw-justify-center -tw-left-4 tw-items-center tw-rounded-[50%] tw-font-semibold tw-text-2xl tw-bg-white tw-absolute tw-w-10 tw-h-10 tw-text-[#3e7111]"></i>
 
         <div id="carousel2" @mouseup="isDragging = false" @mousedown="isDragging = true;" @mousemove="dragging" :class="['tw-flex tw-select-none tw-cursor-grab tw-w-full tw-overflow-hidden  tw-items-center tw-transition-transform    tw-gap-7  tw-p-2', translateScale]">
          
           <div v-for="(crop, index) in barleyRecord" id="item" :class="['tw-bg-white card tw-rounded-sm  tw-transform  tw-p-1 tw-overflow-hidden tw-flex-shrink-0 tw-flex tw-justify-center tw-flex-col tw-items-start', translateScale ]">
           <img class="tw-w-48 tw-h-48 hover:tw-scale-105  tw-duration-500 tw-p-1 tw-cursor-pointer" :src="crop.image" alt="cropImage">
           <span class="tw-text-sm tw-px-1 tw-font-semibold tw-text-[#3e7111]">{{ crop.crop }}</span>
           <span class="tw-text-sm tw-px-1 tw-font-semibold tw-text-wrap tw-text-[#3e7111]">{{ crop.yieldTonsPerHectare.slice(0,4) }}  tons / hectare</span>
           <div class="tw-w-full tw-flex tw-justify-center">
                <span class="tw-text-[12px] tw-font-semibold tw-bg-[radial-gradient(circle,_#3a434a,_#2a3238)]  tw-p-1 tw-rounded-sm tw-my-2 tw-px-2  tw-text-white">Explore</span>
            </div>
        </div>
         </div>
         <i @click="translateSlideRight('#carousel2')" class="ri-arrow-right-s-line tw-z-10 tw-cursor-pointer tw-flex tw-justify-center -tw-right-4 tw-items-center tw-rounded-[50%] tw-font-semibold tw-text-2xl tw-bg-white tw-absolute tw-w-10 tw-h-10 tw-text-[#3e7111]"></i>
       </div>
       <div class="tw-bg-[#3e7111] wrapper tw-my-10 tw-overflow-visible tw-w-[92.5%] tw-rounded-sm tw-relative tw-justify-center  tw-flex tw-flex-col tw-p-5">
         <span class="tw-font-bold tw-text-lg tw-px-3 tw-text-white">Crops Of Soybean</span>
         <i  @click="translateSlideLeft('#carousel3')" class="ri-arrow-left-s-line tw-z-10 tw-cursor-pointer tw-flex tw-justify-center -tw-left-4 tw-items-center tw-rounded-[50%] tw-font-semibold tw-text-2xl tw-bg-white tw-absolute tw-w-10 tw-h-10 tw-text-[#3e7111]"></i>
 
         <div id="carousel3" @mouseup="isDragging = false" @mousedown="isDragging = true;" @mousemove="dragging" :class="['tw-flex tw-select-none tw-cursor-grab tw-w-full tw-overflow-hidden  tw-items-center tw-transition-transform    tw-gap-7  tw-p-2', translateScale]">
          
           <div v-for="(crop, index) in soybeanRecord" id="item" :class="['tw-bg-white card tw-rounded-sm  tw-transform  tw-p-1 tw-overflow-hidden tw-flex-shrink-0 tw-flex tw-justify-center tw-flex-col tw-items-start', translateScale ]">
           <img class="tw-w-48 tw-h-48 hover:tw-scale-105  tw-duration-500 tw-p-1 tw-cursor-pointer" :src="crop.image" alt="cropImage">
           <span class="tw-text-sm tw-px-1 tw-font-semibold tw-text-[#3e7111]">{{ crop.crop }}</span>
           <span class="tw-text-sm tw-px-1 tw-font-semibold tw-text-wrap tw-text-[#3e7111]">{{ crop.yieldTonsPerHectare.slice(0,4) }}  tons / hectare</span>
           <div class="tw-w-full tw-flex tw-justify-center">
                <span class="tw-text-[12px] tw-font-semibold tw-bg-[radial-gradient(circle,_#3a434a,_#2a3238)]  tw-p-1 tw-rounded-sm tw-my-2 tw-px-2  tw-text-white">Explore</span>
            </div>
        </div>
         </div>
         <i @click="translateSlideRight('#carousel3')" class="ri-arrow-right-s-line tw-z-10 tw-cursor-pointer tw-flex tw-justify-center -tw-right-4 tw-items-center tw-rounded-[50%] tw-font-semibold tw-text-2xl tw-bg-white tw-absolute tw-w-10 tw-h-10 tw-text-[#3e7111]"></i>
       </div>
       <div class="tw-bg-[#3e7111] wrapper tw-my-10 tw-overflow-visible tw-w-[92.5%] tw-rounded-sm tw-relative tw-justify-center  tw-flex tw-flex-col tw-p-5">
         <span class="tw-font-bold tw-text-lg tw-px-3 tw-text-white">Crops Of Cotton</span>
         <i  @click="translateSlideLeft('#carousel4')" class="ri-arrow-left-s-line tw-z-10 tw-cursor-pointer tw-flex tw-justify-center -tw-left-4 tw-items-center tw-rounded-[50%] tw-font-semibold tw-text-2xl tw-bg-white tw-absolute tw-w-10 tw-h-10 tw-text-[#3e7111]"></i>
 
         <div id="carousel4" @mouseup="isDragging = false" @mousedown="isDragging = true;" @mousemove="dragging" :class="['tw-flex tw-select-none tw-cursor-grab tw-w-full tw-overflow-hidden  tw-items-center tw-transition-transform    tw-gap-7  tw-p-2', translateScale]">
          
           <div v-for="(crop, index) in cottonRecord" id="item" :class="['tw-bg-white card tw-rounded-sm  tw-transform  tw-p-1 tw-overflow-hidden tw-flex-shrink-0 tw-flex tw-justify-center tw-flex-col tw-items-start', translateScale ]">
           <img class="tw-w-48 tw-h-48 hover:tw-scale-105  tw-duration-500 tw-p-1 tw-cursor-pointer" :src="crop.image" alt="cropImage">
           <span class="tw-text-sm tw-px-1 tw-font-semibold tw-text-[#3e7111]">{{ crop.crop }}</span>
           <span class="tw-text-sm tw-px-1 tw-font-semibold tw-text-wrap tw-text-[#3e7111]">{{ crop.yieldTonsPerHectare.slice(0,4) }}  tons / hectare</span>
           <div class="tw-w-full tw-flex tw-justify-center">
                <span class="tw-text-[12px] tw-font-semibold tw-bg-[radial-gradient(circle,_#3a434a,_#2a3238)]  tw-p-1 tw-rounded-sm tw-my-2 tw-px-2  tw-text-white">Explore</span>
            </div>
        </div>
         </div>
         <i @click="translateSlideRight('#carousel4')" class="ri-arrow-right-s-line tw-z-10 tw-cursor-pointer tw-flex tw-justify-center -tw-right-4 tw-items-center tw-rounded-[50%] tw-font-semibold tw-text-2xl tw-bg-white tw-absolute tw-w-10 tw-h-10 tw-text-[#3e7111]"></i>
       </div>
 
       <div class="tw-bg-[#3e7111] wrapper tw-my-10 tw-overflow-visible tw-w-[92.5%] tw-rounded-sm tw-relative tw-justify-center  tw-flex tw-flex-col tw-p-5">
         <span class="tw-font-bold tw-text-lg tw-px-3 tw-text-white">Crops Of Wheat</span>
         <i  @click="translateSlideLeft('#carousel5')" class="ri-arrow-left-s-line tw-z-10 tw-cursor-pointer tw-flex tw-justify-center -tw-left-4 tw-items-center tw-rounded-[50%] tw-font-semibold tw-text-2xl tw-bg-white tw-absolute tw-w-10 tw-h-10 tw-text-[#3e7111]"></i>
 
         <div id="carousel5" @mouseup="isDragging = false" @mousedown="isDragging = true;" @mousemove="dragging" :class="['tw-flex tw-select-none tw-cursor-grab tw-w-full tw-overflow-hidden  tw-items-center tw-transition-transform    tw-gap-7  tw-p-2', translateScale]">
          
           <div v-for="(crop, index) in wheatRecord" id="item" :class="['tw-bg-white card tw-rounded-sm  tw-transform  tw-p-1 tw-overflow-hidden tw-flex-shrink-0 tw-flex tw-justify-center tw-flex-col tw-items-start', translateScale ]">
           <img class="tw-w-48 tw-h-48 hover:tw-scale-105  tw-duration-500 tw-p-1 tw-cursor-pointer" :src="crop.image" alt="cropImage">
           <span class="tw-text-sm tw-px-1 tw-font-semibold tw-text-[#3e7111]">{{ crop.crop }}</span>
           <span class="tw-text-sm tw-px-1 tw-font-semibold tw-text-wrap tw-text-[#3e7111]">{{ crop.yieldTonsPerHectare.slice(0,4) }}  tons / hectare</span>
           <div class="tw-w-full tw-flex tw-justify-center">
                <span class="tw-text-[12px] tw-font-semibold tw-bg-[radial-gradient(circle,_#3a434a,_#2a3238)]  tw-p-1 tw-rounded-sm tw-my-2 tw-px-2  tw-text-white">Explore</span>
            </div>
        </div>
         </div>
         <i @click="translateSlideRight('#carousel5')" class="ri-arrow-right-s-line tw-z-10 tw-cursor-pointer tw-flex tw-justify-center -tw-right-4 tw-items-center tw-rounded-[50%] tw-font-semibold tw-text-2xl tw-bg-white tw-absolute tw-w-10 tw-h-10 tw-text-[#3e7111]"></i>
       </div>
 
       <div class="tw-bg-[#3e7111] wrapper tw-my-10 tw-overflow-visible tw-w-[92.5%] tw-rounded-sm tw-relative tw-justify-center  tw-flex tw-flex-col tw-p-5">
         <span class="tw-font-bold tw-text-lg tw-px-3 tw-text-white">Crops Of Rice</span>
         <i  @click="translateSlideLeft('#carousel6')" class="ri-arrow-left-s-line tw-z-10 tw-cursor-pointer tw-flex tw-justify-center -tw-left-4 tw-items-center tw-rounded-[50%] tw-font-semibold tw-text-2xl tw-bg-white tw-absolute tw-w-10 tw-h-10 tw-text-[#3e7111]"></i>
 
         <div id="carousel6" @mouseup="isDragging = false" @mousedown="isDragging = true;" @mousemove="dragging" :class="['tw-flex tw-select-none tw-cursor-grab tw-w-full tw-overflow-hidden  tw-items-center tw-transition-transform    tw-gap-7  tw-p-2', translateScale]">
          
           <div v-for="(crop, index) in riceRecord" id="item" :class="['tw-bg-white card tw-rounded-sm  tw-transform  tw-p-1 tw-overflow-hidden tw-flex-shrink-0 tw-flex tw-justify-center tw-flex-col tw-items-start', translateScale ]">
           <img class="tw-w-48 tw-h-48 hover:tw-scale-105  tw-duration-500 tw-p-1 tw-cursor-pointer" :src="crop.image" alt="cropImage">
           <span class="tw-text-sm tw-px-1 tw-font-semibold tw-text-[#3e7111]">{{ crop.crop }}</span>
           <span class="tw-text-sm tw-px-1 tw-font-semibold tw-text-wrap tw-text-[#3e7111]">{{ crop.yieldTonsPerHectare.slice(0,4) }}  tons / hectare</span>
           <div class="tw-w-full tw-flex tw-justify-center">
                <span class="tw-text-[12px] tw-font-semibold tw-bg-[radial-gradient(circle,_#3a434a,_#2a3238)]  tw-p-1 tw-rounded-sm tw-my-2 tw-px-2  tw-text-white">Explore</span>
            </div>
        </div>
         </div>
         <i @click="translateSlideRight('#carousel6')" class="ri-arrow-right-s-line tw-z-10 tw-cursor-pointer tw-flex tw-justify-center -tw-right-4 tw-items-center tw-rounded-[50%] tw-font-semibold tw-text-2xl tw-bg-white tw-absolute tw-w-10 tw-h-10 tw-text-[#3e7111]"></i>
       </div>
 
    </div>
    <router-view v-else />
 </template> 
 