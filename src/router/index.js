import { createRouter, createWebHistory } from "vue-router";
import { getAuth0 } from "../AuthServices.js";

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: "/",
         redirect: "/home",
      },
      {
         path: "/",
         component: () => import("@/layout/AppLayout.vue"),
         children: [
            {
               path: "/home",
               name: "home",
               component: () => import("@/pages/Home/Home.vue"),
               meta: { requiresAuth: true },
               children: [
                  {
                     path: ":uri",
                     name: "cropDetails",
                     component: () => import("@/components/CropDetails.vue"),
                     props: true,
                  },
               ],
            },
            // other routes here...
         ],
      },
   ],
});

router.beforeResolve(async (to, from, next) => {
   const auth0 = getAuth0();
   const isAuthenticated = await auth0.isAuthenticated(); // Check authentication status

   // Check if the route requires authentication and if the user is not authenticated
   if (to.meta.requiresAuth && !isAuthenticated) {
      // Check if we're already in the login callback route to prevent infinite redirects
      if (to.path !== "/callback") {
         await auth0.loginWithRedirect({
            appState: { targetUrl: to.fullPath }, // Store the target route
         });
      } else {
         next(); // If we are already on the callback route, proceed normally
      }
   } else {
      next(); // User is authenticated or route doesn't require authentication
   }
});

export default router;
