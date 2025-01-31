import { createAuth0Client } from "@auth0/auth0-spa-js";
import { ref } from "vue";
const auth0 = ref(null);

export const initAuth0 = async () => {
   if (!auth0.value) {
      auth0.value = await createAuth0Client({
         domain: import.meta.env.VITE_DOMAIN_NAME,
         clientId: import.meta.env.VITE_CLIENT_ID,
         authorizationParams: {
            redirect_uri: window.location.origin,
         },
      });
   }
};

export const getAuth0 = () => {
   if (!auth0.value) {
      throw new Error(
         "Auth0 client has not been initialized. Call initAuth0() first.",
      );
   }
   return auth0.value;
};
