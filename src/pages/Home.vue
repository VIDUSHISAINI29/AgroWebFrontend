<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>
 
<template>
   <div>
      <div class="wineGlassTable tw-flex tw-justify-center tw-items-center tw-h-[80vh]">
        <div>
         <span class="text  tw-block tw-w-[600px] tw-text-7xl">
            Growing prosperity nurturing nature.
         </span>
        </div>
      </div>
   </div>
</template> 

<style scoped>
.wineGlassTable{
   background-image: url('/images/greenLeaves.jpg');
   background-size: cover;
   background-repeat: no-repeat;

}
.text{
   -webkit-text-stroke: 1px white; 
   color: transparent;
   animation: outline-animation 3s ease-in-out;
   transition: all;
}
@keyframes outline-animation {
      0% {
        -webkit-text-stroke: 0px transparent; /* Start with no outline */
      }
      100% {
        -webkit-text-stroke: 1px rgb(193, 186, 186); /* End with a solid black outline */
      }
    }
    .outlined-text:nth-child(1) {
      animation-delay: 0s; /* First word starts immediately */
    }

    .outlined-text:nth-child(2) {
      animation-delay: 1s; /* Second word starts after 0.5s */
    }

    .outlined-text:nth-child(3) {
      animation-delay: 2s; /* Third word starts after 1s */
    }

</style> 