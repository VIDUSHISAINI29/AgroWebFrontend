<script setup>


</script>

<template>
    <div class="wineGlassTable tw-w-full tw-flex tw-flex-col  tw-items-end tw-h-[80vh]">
      <div
      class="tw-flex tw-border-b tw-border-[#3e7111] tw-w-full tw-items-center tw-justify-between tw-p-2 tw-px-5">
      <div>
         <div>
            <img
               class="tw-h-12 tw-cursor-pointer tw-w-14 tw-rounded-[50%]"
               src="/images/agroLogo.jpeg"
               alt="logo" />
         </div>
      </div>
      <div class="tw-flex tw-gap-5 tw-font-semibold tw-text-[#3e7111]">
        <div class="tw-group tw-relative tw-flex tw-cursor-pointer tw-flex-col tw-transition-colors            tw-duration-300 ">
            <router-link
               to="/home"
               class=" tw-w-20 tw-text-center tw-font-semibold tw-text-[#3e7111] tw-transition-all tw-duration-500 ">
               Home
            </router-link>
            <div class="tw-flex">
               <span
                  class="tw-absolute tw-h-[2px] tw-w-[40px] -tw-translate-x-1 tw-transform tw-rounded-bl-sm tw-rounded-tl-sm tw-bg-[#86cdf7] tw-transition-transform tw-duration-300 group-hover:tw-translate-x-0 group-hover:tw-bg-[#3e7111]"></span>
               <span
                  class="tw-absolute tw-h-[2px] tw-w-[40px]  tw-translate-x-11 tw-transform tw-rounded-br-sm tw-rounded-tr-sm tw-bg-[#86cdf7] tw-transition-transform tw-duration-300 group-hover:tw-translate-x-10 group-hover:tw-bg-[#3e7111]"></span> 
            </div>
         </div>
         <div class="tw-group tw-relative tw-flex tw-cursor-pointer tw-flex-col tw-transition-colors            tw-duration-300 ">
            <router-link
               to="/crops-wise"
               class=" tw-w-20 tw-text-center tw-font-semibold tw-text-[#3e7111] tw-transition-all tw-duration-500 ">
               Crop-Wise
            </router-link>
            <div class="tw-flex">
               <span
                  class="tw-absolute tw-h-[2px] tw-w-[40px] -tw-translate-x-1 tw-transform tw-rounded-bl-sm tw-rounded-tl-sm tw-bg-[#86cdf7] tw-transition-transform tw-duration-300 group-hover:tw-translate-x-0 group-hover:tw-bg-[#3e7111]"></span>
               <span
                  class="tw-absolute tw-h-[2px] tw-w-[40px]  tw-translate-x-11 tw-transform tw-rounded-br-sm tw-rounded-tr-sm tw-bg-[#86cdf7] tw-transition-transform tw-duration-300 group-hover:tw-translate-x-10 group-hover:tw-bg-[#3e7111]"></span> 
            </div>
         </div>
         <div class="tw-group tw-relative tw-flex tw-cursor-pointer tw-flex-col tw-transition-colors            tw-duration-300 ">
            <router-link
               to="/soil-wise"
               class=" tw-w-20 tw-text-center tw-font-semibold tw-text-[#3e7111] tw-transition-all tw-duration-500 ">
               Soil-Wise
            </router-link>
            <div class="tw-flex">
               <span
                  class="tw-absolute tw-h-[2px] tw-w-[40px] -tw-translate-x-1 tw-transform tw-rounded-bl-sm tw-rounded-tl-sm tw-bg-[#86cdf7] tw-transition-transform tw-duration-300 group-hover:tw-translate-x-0 group-hover:tw-bg-[#3e7111]"></span>
               <span
                  class="tw-absolute tw-h-[2px] tw-w-[40px]  tw-translate-x-11 tw-transform tw-rounded-br-sm tw-rounded-tr-sm tw-bg-[#86cdf7] tw-transition-transform tw-duration-300 group-hover:tw-translate-x-10 group-hover:tw-bg-[#3e7111]"></span> 
        </div>
         </div>
         <div class="tw-group tw-relative tw-flex tw-cursor-pointer tw-flex-col tw-transition-colors            tw-duration-300 ">
            <router-link
               to="/region-wise"
               class=" tw-w-24 tw-text-center tw-font-semibold tw-text-[#3e7111] tw-transition-all tw-duration-500 ">
               Region-Wise
            </router-link>
            <div class="tw-flex">
               <span
                  class="tw-absolute tw-h-[2px] tw-w-12 -tw-translate-x-1 tw-transform tw-rounded-bl-sm tw-rounded-tl-sm tw-bg-[#79c8f5] tw-transition-transform tw-duration-300 group-hover:tw-translate-x-0 group-hover:tw-bg-[#3e7111]"></span>
               <span
                  class="tw-absolute tw-h-[2px] tw-w-12  tw-translate-x-14 tw-transform tw-rounded-br-sm tw-rounded-tr-sm tw-bg-[#79c8f5] tw-transition-transform tw-duration-300 group-hover:tw-translate-x-12 group-hover:tw-bg-[#3e7111]"></span> 
        </div>
         </div>
       
      </div>
      <div>
         <span class=" tw-cursor-pointer tw-rounded-[4px]  tw-bg-[radial-gradient(circle,_#3a434a,_#2a3238)]  tw-font-semibold tw-text-sm tw-py-2 tw-px-[10px] tw-text-[#61a622]">Logout</span>
      </div>
   </div>
        <div class="tw-w-full tw-flex tw-justify-end tw-items-end tw-h-[50vh]">
          
         <span class="text  tw-block tw-w-[570px] tw-mb-7 tw-text-[4rem]">
          Fields whisper stories of resilience, growth, and hope.
         </span>
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
   -webkit-text-stroke: 3px rgb(67, 144, 0); 
   color: transparent;
   animation: outline-animation 3s ease-in-out;
   transition: all;
   line-height: 100%;
}


</style> 