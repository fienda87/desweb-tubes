import { createWebHashHistory, createRouter } from "vue-router";

import Homepage from "@/pages/homepage.vue";
import HowToPlay from "@/pages/howtoplay.vue";

const routes = [

    {
        path: "/",
        name: "homepage",
        component: Homepage,
    },
    {
        path: "/howtoplay",
        name: "howtoplay",
        component: HowToPlay,
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;