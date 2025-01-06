<script setup>
import { ref } from 'vue';


const serviceTimingsArray = ref(['45 min', '30 min', '60 min']);
</script>

<template>
    <div id="services" class="paralax tw-h-[100vh]  tw-gap-9 tw-flex tw-flex-col tw-justify-center tw-items-center tw-w-full">
    <!-- <span class="servicesHeading tw-text-[3.5rem] tw-block tw-w-11/12">Services</span> -->
   <div class="tw-gap-28 tw-flex tw-justify-center tw-items-center tw-w-full">
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
   
   </div>
</template>

<style scoped>

.paralax{
  background-image: url('/images/sunflowers.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>