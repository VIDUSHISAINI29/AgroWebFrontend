import "./assets/tailwind.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { initAuth0 } from "./AuthServices.js";

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

const app = createApp(App);


app.use(PrimeVue, {

   unstyled: false,
   theme: {
      preset: Aura,
      options: {
         darkModeSelector: '.tw-dark',
      },
   },
});
(async () => {
   await initAuth0(); // Initialize Auth0 client
   app.use(createPinia());
   app.use(router);
   app.mount("#app");
})(); // Wait for Auth0 initialization before mounting the app
