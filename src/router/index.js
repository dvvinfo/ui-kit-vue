import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/Index.vue";
import Typography from "@/views/Typography.vue";
import Checkboxes from "@/views/Checkboxes.vue";

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
      path: "/checkboxes",
      name: "Checkboxes",
      component: Checkboxes,
  },
  ],
});

export default router;
