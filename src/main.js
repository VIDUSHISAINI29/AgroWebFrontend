import "./assets/tailwind.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { getAuth0, initAuth0 } from "./AuthServices.js";

const app = createApp(App);

(async () => {
   await initAuth0(); // Initialize Auth0 client
   app.use(createPinia());
   app.use(router);
   app.mount("#app");
})(); // Wait for Auth0 initialization before mounting the app
