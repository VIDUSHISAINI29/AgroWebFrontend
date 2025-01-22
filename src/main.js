import "./assets/tailwind.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { initAuth0 } from "./AuthServices.js";
const app = createApp(App);

app.use(createPinia());
(async () => {
   await initAuth0(); // Initialize Auth0 client
   createApp(App).use(router).mount("#app");
})(); // Provide Auth0 to the app
// app.use(router);

// app.mount("#app");
