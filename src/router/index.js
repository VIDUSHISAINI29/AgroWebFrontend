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
         meta: { requiresAuth: true },
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
            {
               path: "/crop-wise",
               name: "crop-wise",
               component: () => import("@/pages/Crops/CropWise.vue"),
               meta: { requiresAuth: true },
               children: [
                  {
                     path: ":uri",
                     name: "cropDetails",
                     component: () => import("@/pages/Crops/CropDetails.vue"),
                     props: true,
                  },
               ],
            },
            {
               path: "/region-wise",
               name: "region-wise",
               component: () => import("@/pages/Region/RegionWise.vue"),
               meta: { requiresAuth: true },
               children: [
                  {
                     path: ":uri",
                     name: "cropDetails",
                     component: () => import("@/pages/Region/CropDetails.vue"),

                     props: true,
                  },
               ],
            },
            {
               path: "/soil-wise",
               name: "soil-wise",
               component: () => import("@/pages/Soil/SoilWise.vue"),
               meta: { requiresAuth: true },
               children: [
                  {
                     path: ":uri",
                     name: "cropDetails",
                     component: () => import("@/pages/Soil/CropDetails.vue"),
                     props: true,
                  },
               ],
            },
            {
               path: "/test",
               name: "test",
               component: () => import("@/pages/Test.vue"),
               meta: { requiresAuth: true },
            },
         ],
      },
   ],
});
router.beforeEach(async (to, from, next) => {
   const auth0 = getAuth0();

   try {
      const isAuthenticated = await auth0.isAuthenticated(); // Check authentication status
      if (to.meta.requiresAuth && !isAuthenticated) {
         await auth0.loginWithRedirect({
            appState: { targetUrl: to.fullPath },
         });
      } else {
         next();
      }
   } catch (error) {
      console.error("Auth0 Error:", error);
      next(false); // Stop navigation on error
   }
});

export default router;
