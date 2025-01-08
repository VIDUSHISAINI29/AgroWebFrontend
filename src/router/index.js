import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path:'/',
         redirect:'/home'
      },
      {
         path: "/",
         component: () => import("@/layout/AppLayout.vue"),
         children: [
            {
               path: "home",
               name: "home",
               component: () => import("@/pages/Home.vue"),
               children:[
                  {
                     path: ":uri",
                     name: "cropDetails",
                     component: () => import("@/pages/CropDetails.vue"),
                     props: true,
                  },
               ]
            },
            {
               path: "/crop-wise",
               name: "crop-wise",
               component: () => import("@/pages/CropWise.vue"),
               children:[
                  {
                     path: ":uri",
                     name: "cropDetails",
                     component: () => import("@/pages/CropDetails.vue"),
                     props: true,
                  },
               ]
            },
            {
               path: "/region-wise",
               name: "region-wise",
               component: () => import("@/pages/RegionWise.vue"),
               children:[
                  {
                     path: ":uri",
                     name: "cropDetails",
                     component: () => import("@/pages/CropDetails.vue"),
                     props: true,
                  },
               ]
            },
            {
               path: "/soil-wise",
               name: "soil-wise",
               component: () => import("@/pages/SoilWise.vue"),
               children:[
                  {
                     path: ":uri",
                     name: "cropDetails",
                     component: () => import("@/pages/CropDetails.vue"),
                     props: true,
                  },
               ]
            },
            {
               path: "/test",
               name: "test",
               component: () => import("@/pages/Test.vue"),
            },
         ],
      },
   ],
});

export default router;
