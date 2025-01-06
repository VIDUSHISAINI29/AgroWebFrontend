<script setup>
import axios from "axios";
import { onMounted, ref, watch } from "vue";
import Navbar from '@/layout/Navbar.vue'
import { doc } from "prettier";

const cropsRecord = ref([]);
const serviceTimingsArray = ref(['45 min', '30 min', '60 min'])
const fetchRecord = async(url) => {
  try {
    const result = await axios.get(url);
    return result.data;
  } catch (error) {
    console.log("Error in fetching record", error);
  }
}

async function loadData(){
 cropsRecord.value = await fetchRecord(`${import.meta.env.VITE_BACKEND_URL}/crops-data`);
  console.log('crops = ', cropsRecord.value );

}
function assignAnimationDelay(){
  let i = 0;
  
  const totalItems = cropsRecord.value.length
  for(i=0; i < totalItems; i++){
    const elemCrop = document.querySelector(`#item${i}`);
    const delay =  `calc(30s / ${totalItems} * (${totalItems} - ${i +1}) * -1)`;
    elemCrop.style.animationDelay = delay;
    elemCrop.style.left = `max(calc(200px * ${totalItems}), 100%)`;
  }
 
}
onMounted(async () => {
  await loadData()
  assignAnimationDelay();
})



</script>
 
<template>
 
  <div class="tw-flex tw-flex-col tw-bg-[#e1fcc8] tw-items-center tw-w-full">
    <div class=" tw-my-10  tw-w-full  tw-rounded-sm tw-justify-center  tw-flex tw-flex-col tw-p-5">
         <div :class="['tw-flex tw-w-full tw-overflow-hidden tw-items-center tw-transition-transform    tw-gap-7 tw-relative wrapper tw-h-[50vh]  tw-p-2', translateScale]">
          
           <div v-for="(crop, index) in cropsRecord"  :id="'item' + index" :class="[' tw-bg-[#3e7111] tw-z-10 item tw-rounded-sm tw-w-[200px] tw-h-[270px] tw-text-white  tw-p-1  tw-flex-shrink-0 tw-flex tw-justify-center tw-flex-col tw-items-start',  ]">
           <img class="tw-w-48 tw-h-48 hover:tw-scale-105  tw-duration-500 tw-p-1 tw-cursor-pointer" :src="crop.image" alt="cropImage">
           <span class="tw-text-sm tw-px-1 tw-font-semibold ">{{ crop.crop }}</span>
           <span class="tw-text-sm tw-px-1 tw-font-semibold tw-text-wrap ">{{ crop.yieldTonsPerHectare.slice(0,4) }}  tons / hectare</span>
           <div class="tw-w-full tw-flex tw-justify-center">
                <span class="tw-text-[12px] tw-font-semibold tw-bg-[radial-gradient(circle,_#3a434a,_#2a3238)]  tw-p-1 tw-rounded-sm tw-my-2 tw-px-2  tw-cursor-pointer tw-text-white">Explore</span>
            </div>
        </div>
         </div>
         
       </div>
       <div id="services" class="paralax tw-h-[80vh] tw-gap-28 tw-flex tw-justify-center tw-items-center tw-w-full">
        <!-- <div class="tw-w-full   tw-h-full"></div> -->
        <div v-for="(time, index) in serviceTimingsArray" :key="index" class=" tw-text-[#3e7111] tw-bg-[#defcc2d9] tw-border-[5px] tw-rounded-sm tw-border-[#000] tw-w-56 tw-p-2 tw-flex tw-flex-col tw-justify-center tw-items-center">
                <div class="  tw-text-black tw-text-center  tw-font-bold tw-text-2xl">
                    FREE CONSULTATION
                </div>
                <div class=" head_card tw-mt-5 tw-text-center tw-font-bold tw-text-base">
                   This is one of our services for your business.
                </div>
                <div class="homecard_line  tw-mt-4 tw-w-4/5 tw-bg-black"></div>
                <div class=" head_card tw-mt-8 tw-text-center   tw-font-bold tw-text-lg">
             {{time}}
                </div>
                <button class="tw-py-[6px] tw-px-4 tw-mt-14 tw-bg-black tw-rounded-sm tw-text-white tw-my-4">Book It</button>
            </div>
       
       </div>
       <div class=" tw-h-[80vh] tw-w-full">

       </div>
  </div>
</template> 

<style scoped>


 @keyframes scrollLeft{
    to{
        left: -200px;
    }
}
*{
  box-sizing: border-box;
}
.wrapper{
  mask-image: linear-gradient(
        to right,
        rgba(0,0,0,0),
        rgba(0,0,0,1) 7%,
        rgba(0,0,0,1) 93%,
        rgba(0,0,0,0)
    );
}
.item{
  position: absolute;
    left: max(calc(200px * 8), 100%);
    animation-name: scrollLeft;
    animation-duration: 30s;
     animation-iteration-count: infinite;
     animation-timing-function: linear;
     height: 50vh;
}
.paralax{
  background-image: url('/images/sunflowers.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>
