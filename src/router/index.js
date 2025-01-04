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
            },
            {
               path: "/region-wise",
               name: "region-wise",
               component: () => import("@/pages/RegionWise.vue"),
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
