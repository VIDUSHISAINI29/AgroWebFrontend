<script setup>
import axios from "axios";
import { onMounted, ref, watch } from "vue";

const cropsRecord = ref(null);
const fetchRecord = async() => {
  try {
    const result = await axios.get('http://localhost:4024/crops-data');
    return result.data;
  } catch (error) {
    console.log("Error in fetchin record", error);
  }
}
onMounted(() => {
  cropsRecord.value = fetchRecord();
  console.log('crops = ', cropsRecord.value );
  
})

</script>
 
<template>
   <div>
      <div class="wineGlassTable tw-flex tw-justify-end tw-items-center tw-h-[80vh]">
        <div>
          <div class="navbar"></div>
         <span class="text  tw-block tw-w-[570px] tw-m-3 tw-text-[4rem]">
          Fields whisper stories of resilience, growth, and hope.
         </span>
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