import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/Index.vue";
import Typography from "@/views/Typography.vue";
import Buttons from "@/views/Buttons.vue";
import Checkboxes from "@/views/Checkboxes.vue";
import Switches from "@/views/Switches.vue";
import RadioButtons from "@/views/RadioButtons.vue";
import Progress from "@/views/Progress.vue";
import Inputs from "@/views/Inputs.vue";
import TextAreas from "@/views/TextAreas.vue";
import Tabs from "@/views/Tabs.vue";
import Tables from "@/views/Tables.vue";
import Modals from "@/views/Modals.vue";

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
      path: "/switches",
      name: "Switches",
      component: Switches,
    },
    {
      path: "/checkboxes",
      name: "Checkboxes",
      component: Checkboxes,
    },
    {
      path: "/checkboxes",
      name: "Checkboxes",
      component: Checkboxes,
    },
    {
      path: "/radiobuttons",
      name: "RadioButtons",
      component: RadioButtons,
    },
    {
      path: "/progress-bar",
      name: "Progress",
      component: Progress,
    },
    {
      path: "/inputs",
      name: "Inputs",
      component: Inputs,
    },
    {
      path: "/textareas",
      name: "TextAreas",
      component: TextAreas,
    },
    {
      path: "/tabs",
      name: "Tabs",
      component: Tabs,
    },
    {
      path: "/tables",
      name: "Tables",
      component: Tables,
    },
    {
      path: "/modals",
      name: "Modals",
      component: Modals,
    },
  ],
});

export default router;
