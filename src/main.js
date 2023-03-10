import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

createApp(App).use(router).component("VPagination", VPagination).mount("#app");
