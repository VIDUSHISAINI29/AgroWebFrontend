<script setup>
import axios from 'axios';
import { onMounted, ref, watch } from 'vue';
const props = defineProps({
    uri: String,
});
const cropsData = ref(null);
const selectedCrop = ref(null);
const cropskeyWordsArray = ref(['Yields', 'Region', 'Soil Type', 'Weather Condition', 'Temperature', 'Irrigation Used', 'Fertilizer Used' , 'Rainfall', 'Total Time To Harvest']);
const cropsValuesArray = ref(null);


const fetch =  async(url) => {
    try {
        const result = await axios.get(url);
        return result.data;
    } catch (error) {
        console.log("error in fetching at frontend in detail page.");
    } 
}
async function loadData() {
  if(props.uri){
    cropsData.value = await fetch(`${import.meta.env.VITE_BACKEND_URL}/crops-data`);
    cropsData.value.map((crop) => {
        if(crop.index === props.uri){
            selectedCrop.value = crop;
            selectedCrop.value.yieldTonsPerHectare = selectedCrop.value.yieldTonsPerHectare.slice(0,4)
            selectedCrop.value.tempratureCelsius = selectedCrop.value.tempratureCelsius.slice(0,5)
        }
    });
    cropsValuesArray.value = ['yieldTonsPerHectare', 'region', 'soilType', 'weatherCondition', 'tempratureCelsius', 'irrigationUsed', 'fertilizeUsed' , 'ranfallMM', 'daysToHarvest']
    console.log("selected value = ", selectedCrop.value);
  }
  else{
    console.log("value ni aayi props ki");
    
  }
}
watch(() => props.uri, async() =>{
    await loadData();
})
onMounted( async() => {
    await loadData();
});

console.log("hey details");


</script>
<template>

<div class="tw-w-full tw-my-10 tw-py-10 tw-rounded-md tw-flex tw-justify-center tw-bg-white tw-p-2 tw-items-center">
    <div v-if="selectedCrop" class="tw-w-[750px]  tw-p-1 tw-flex">
        <div class="tw-w-[450px] tw-flex tw-flex-col tw tw-p-1">
         
           <div  class="tw-flex">
            <span class="tw-w-40   tw-p-1">Yields</span>
            <span class="tw-w-4 tw-text-center  tw-p-1">:</span>
            <span class="tw-w-48 tw-text-center  tw-p-1">{{ selectedCrop.yieldTonsPerHectare}} hectares/ton</span>
           </div>
           <div class="tw-flex">
            <span class="tw-w-40   tw-p-1">Region</span>
            <span class="tw-w-4 tw-text-center  tw-p-1">:</span>
            <span class="tw-w-48 tw-text-center  tw-p-1">{{ selectedCrop.region }}</span>
           </div>
           <div class="tw-flex">
            <span class="tw-w-40   tw-p-1">Soil Type</span>
            <span class="tw-w-4 tw-text-center  tw-p-1">:</span>
            <span class="tw-w-48 tw-text-center  tw-p-1">{{ selectedCrop.soilType }}</span>
           </div>
           <div class="tw-flex">
            <span class="tw-w-40   tw-p-1">Weather Condition</span>
            <span class="tw-w-4 tw-text-center  tw-p-1">:</span>
            <span class="tw-w-48 tw-text-center  tw-p-1">{{ selectedCrop.weatherCondition }}</span>
           </div>
           <div class="tw-flex">
            <span class="tw-w-40   tw-p-1">Temperature </span>
            <span class="tw-w-4 tw-text-center  tw-p-1">:</span>
            <span class="tw-w-48 tw-text-center  tw-p-1">{{ selectedCrop.tempratureCelsius }} <i class="ri-celsius-line"></i></span>
           </div>
           <div class="tw-flex">
            <span class="tw-w-40   tw-p-1">Irrigation Used</span>
            <span class="tw-w-4 tw-text-center  tw-p-1">:</span>
            <span class="tw-w-48 tw-text-center  tw-p-1">{{ selectedCrop.irrigationUsed }}</span>
           </div>
           <div class="tw-flex">
            <span class="tw-w-40   tw-p-1">Fertilizer Used</span>
            <span class="tw-w-4 tw-text-center  tw-p-1">:</span>
            <span class="tw-w-48 tw-text-center  tw-p-1">{{ selectedCrop.fertilizeUsed }}</span>
           </div>
           <div class="tw-flex">
            <span class="tw-w-40   tw-p-1">Rainfall</span>
            <span class="tw-w-4 tw-text-center tw-p-1">:</span>
            <span class="tw-w-48 tw-text-center  tw-p-1">{{ selectedCrop.ranfallMM }}</span>
           </div>
           <div class="tw-flex">
            <span class="tw-w-40   tw-p-1"> Total Time To Harvest</span>
            <span class="tw-w-4 tw-text-center  tw-p-1">:</span>
            <span class="tw-w-48 tw-text-center  tw-p-1">{{ selectedCrop.daysToHarvest }} days</span>
           </div>
        </div>
        <div class="tw-w-[290px] tw-flex tw-flex-col  tw-p-1">
            <img class="tw-w-full tw-h-[300px] tw-rounded-md" :src="selectedCrop.image"  alt="">
            <span class="tw-w-full tw-text-xl tw-font-semibold tw-text-[#3e7111] tw-text-center  tw-p-1">{{ selectedCrop.crop }}</span>
        </div>
    </div>
</div>

</template>
<style scoped>

</style>