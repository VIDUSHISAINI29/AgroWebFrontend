<!-- <script setup>

import { ref } from 'vue';
import Password from 'primevue/password';
const value = ref(null);

</script> -->

<!-- <template>
    <div class="card tw-w-[500px] flex justify-center">
        <Password  :pt="{
                              	overlay: () => ({
                                 class: 'tw-w-96',
                              }),
                           }"  v-model="value" :feedback="false" />

    </div>
</template> -->

<template>
    <div class="card flex justify-center">
        <Select  :pt="{
                              overlay: () => ({
                                 class: 'tw-w-64',
                              }),
                           }" v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="tw-w-full md:w-56" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCity = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
</script>

