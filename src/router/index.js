import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/Index.vue";
import Typography from "@/views/Typography.vue";
import Buttons from "@/views/Buttons.vue";
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
      path: "/buttons",
      name: "Buttons",
      component: Buttons,
  },
  {
    path: "/checkboxes",
    name: "Checkboxes",
    component: Checkboxes,
},
  ],
});

export default router;
