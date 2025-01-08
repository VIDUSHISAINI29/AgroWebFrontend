<script setup>
import axios from 'axios';
import { onMounted, ref, watch } from 'vue';
const props = defineProps({
    uri: String,
});
const cropsData = ref(null);
const selectedCrop = ref(null);


const fetch =  async(url) => {
    try {
        const result = await axios.get(url);
        return result.data;
    } catch (error) {
        console.log("error in fetching at frontend in detail page.");
    } 
}
async function loadData() {
    cropsData.value = await fetch(`${import.meta.env.VITE_BACKEND_URL}/crops-data`);
    cropsData.value.find((crop) => {
        if(crop.index === props.uri){
            selectedCrop.value = crop;
        }
    });
    console.log("selected value = ", selectedCrop.value);
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

<div class="tw-bg-pink-400 tw-p-2">Hey details</div>

</template>
<style scoped>

</style>