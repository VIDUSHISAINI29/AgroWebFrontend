<script setup></script>

<template>
   <div
      class="wineGlassTable tw-flex tw-h-[80vh] tw-w-full tw-flex-col tw-items-end">
      <div
         class="tw-hidden tw-w-full tw-items-center tw-justify-between tw-border-b tw-border-[#3e7111] tw-p-2 tw-px-5 md:tw-flex">
         <div>
            <img
               class="tw-h-12 tw-w-14 tw-cursor-pointer tw-rounded-[50%]"
               src="/images/agroLogo.jpeg"
               alt="logo" />
         </div>
         <div class="tw-flex tw-gap-5 tw-font-semibold tw-text-[#3e7111]">
            <div
               class="tw-group tw-relative tw-flex tw-cursor-pointer tw-flex-col tw-transition-colors tw-duration-300">
               <router-link
                  to="/home"
                  class="tw-w-20 tw-text-center tw-font-semibold tw-text-[#3e7111] tw-transition-all tw-duration-500">
                  Home
               </router-link>
               <div class="tw-flex">
                  <span
                     class="tw-absolute tw-h-[2px] tw-w-[40px] -tw-translate-x-1 tw-transform tw-rounded-bl-sm tw-rounded-tl-sm tw-bg-[#86cdf7] tw-transition-transform tw-duration-300 group-hover:tw-translate-x-0 group-hover:tw-bg-[#3e7111]"></span>
                  <span
                     class="tw-absolute tw-h-[2px] tw-w-[40px] tw-translate-x-11 tw-transform tw-rounded-br-sm tw-rounded-tr-sm tw-bg-[#86cdf7] tw-transition-transform tw-duration-300 group-hover:tw-translate-x-10 group-hover:tw-bg-[#3e7111]"></span>
               </div>
            </div>
            <div
               class="tw-group tw-relative tw-flex tw-cursor-pointer tw-flex-col tw-transition-colors tw-duration-300">
               <router-link
                  to="/crop-wise"
                  class="tw-w-20 tw-text-center tw-font-semibold tw-text-[#3e7111] tw-transition-all tw-duration-500">
                  Crop-Wise
               </router-link>
               <div class="tw-flex">
                  <span
                     class="tw-absolute tw-h-[2px] tw-w-[40px] -tw-translate-x-1 tw-transform tw-rounded-bl-sm tw-rounded-tl-sm tw-bg-[#86cdf7] tw-transition-transform tw-duration-300 group-hover:tw-translate-x-0 group-hover:tw-bg-[#3e7111]"></span>
                  <span
                     class="tw-absolute tw-h-[2px] tw-w-[40px] tw-translate-x-11 tw-transform tw-rounded-br-sm tw-rounded-tr-sm tw-bg-[#86cdf7] tw-transition-transform tw-duration-300 group-hover:tw-translate-x-10 group-hover:tw-bg-[#3e7111]"></span>
               </div>
            </div>
            <div
               class="tw-group tw-relative tw-flex tw-cursor-pointer tw-flex-col tw-transition-colors tw-duration-300">
               <router-link
                  to="/soil-wise"
                  class="tw-w-20 tw-text-center tw-font-semibold tw-text-[#3e7111] tw-transition-all tw-duration-500">
                  Soil-Wise
               </router-link>
               <div class="tw-flex">
                  <span
                     class="tw-absolute tw-h-[2px] tw-w-[40px] -tw-translate-x-1 tw-transform tw-rounded-bl-sm tw-rounded-tl-sm tw-bg-[#86cdf7] tw-transition-transform tw-duration-300 group-hover:tw-translate-x-0 group-hover:tw-bg-[#3e7111]"></span>
                  <span
                     class="tw-absolute tw-h-[2px] tw-w-[40px] tw-translate-x-11 tw-transform tw-rounded-br-sm tw-rounded-tr-sm tw-bg-[#86cdf7] tw-transition-transform tw-duration-300 group-hover:tw-translate-x-10 group-hover:tw-bg-[#3e7111]"></span>
               </div>
            </div>
            <div
               class="tw-group tw-relative tw-flex tw-cursor-pointer tw-flex-col tw-transition-colors tw-duration-300">
               <router-link
                  to="/region-wise"
                  class="tw-w-24 tw-text-center tw-font-semibold tw-text-[#3e7111] tw-transition-all tw-duration-500">
                  Region-Wise
               </router-link>
               <div class="tw-flex">
                  <span
                     class="tw-absolute tw-h-[2px] tw-w-12 -tw-translate-x-1 tw-transform tw-rounded-bl-sm tw-rounded-tl-sm tw-bg-[#79c8f5] tw-transition-transform tw-duration-300 group-hover:tw-translate-x-0 group-hover:tw-bg-[#3e7111]"></span>
                  <span
                     class="tw-absolute tw-h-[2px] tw-w-12 tw-translate-x-14 tw-transform tw-rounded-br-sm tw-rounded-tr-sm tw-bg-[#79c8f5] tw-transition-transform tw-duration-300 group-hover:tw-translate-x-12 group-hover:tw-bg-[#3e7111]"></span>
               </div>
            </div>
            <div
               class="tw-group tw-relative tw-flex tw-cursor-pointer tw-flex-col tw-transition-colors tw-duration-300">
               <a
                  href="#about-us"
                  class="tw-w-24 tw-text-center tw-font-semibold tw-text-[#3e7111] tw-transition-all tw-duration-500">
                  About Us
               </a>
               <div class="tw-flex">
                  <span
                     class="tw-absolute tw-h-[2px] tw-w-12 -tw-translate-x-1 tw-transform tw-rounded-bl-sm tw-rounded-tl-sm tw-bg-[#79c8f5] tw-transition-transform tw-duration-300 group-hover:tw-translate-x-0 group-hover:tw-bg-[#3e7111]"></span>
                  <span
                     class="tw-absolute tw-h-[2px] tw-w-12 tw-translate-x-14 tw-transform tw-rounded-br-sm tw-rounded-tr-sm tw-bg-[#79c8f5] tw-transition-transform tw-duration-300 group-hover:tw-translate-x-12 group-hover:tw-bg-[#3e7111]"></span>
               </div>
            </div>
            <div
               class="tw-group tw-relative tw-flex tw-cursor-pointer tw-flex-col tw-transition-colors tw-duration-300">
               <a
                  href="#services"
                  class="tw-w-24 tw-text-center tw-font-semibold tw-text-[#3e7111] tw-transition-all tw-duration-500">
                  Services
               </a>
               <div class="tw-flex">
                  <span
                     class="tw-absolute tw-h-[2px] tw-w-12 -tw-translate-x-1 tw-transform tw-rounded-bl-sm tw-rounded-tl-sm tw-bg-[#79c8f5] tw-transition-transform tw-duration-300 group-hover:tw-translate-x-0 group-hover:tw-bg-[#3e7111]"></span>
                  <span
                     class="tw-absolute tw-h-[2px] tw-w-12 tw-translate-x-14 tw-transform tw-rounded-br-sm tw-rounded-tr-sm tw-bg-[#79c8f5] tw-transition-transform tw-duration-300 group-hover:tw-translate-x-12 group-hover:tw-bg-[#3e7111]"></span>
               </div>
            </div>
         </div>
         <div>
            <span
               class="tw-cursor-pointer tw-rounded-[4px] tw-bg-[radial-gradient(circle,_#3a434a,_#2a3238)] tw-px-[10px] tw-py-2 tw-text-sm tw-font-semibold tw-text-[#61a622]">
               Logout
            </span>
         </div>
      </div>
      <i class="ri-menu-5-fill tw-mx-3 tw-my-1 tw-text-2xl tw-text-white"></i>
      <div
         class="tw-flex tw-h-[50vh] tw-w-1/2 tw-items-end tw-justify-end tw-bg-purple-300">
         <span
            class="text tw-mb-7 tw-w-[200px] tw-bg-red-300 tw-text-xl md:tw-w-[500px] md:tw-text-[4rem]">
            Fields whisper stories of resilience, growth, and hope.
         </span>
      </div>
   </div>
</template>
<style scoped>
.wineGlassTable {
   background-image: url("/images/field.jpg");
   background-size: cover;
   background-repeat: no-repeat;
}
.text {
   -webkit-text-stroke: 2px rgb(67, 144, 0);
   color: transparent;
   transition: all;
   line-height: 100px;
}
</style>
