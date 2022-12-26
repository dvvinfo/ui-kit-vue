import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/Index.vue";
import Typography from "@/views/Typography.vue";
import Buttons from "@/views/Buttons.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index,
    },
    {
        path: "/typography",
        name: "Typography",
        component: Typography,
    },
    {
      path: "/buttons",
      name: "Buttons",
      component: Buttons,
  },
  ],
});

export default router;
