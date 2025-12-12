import { createWebHashHistory, createRouter } from "vue-router";

import Homepage from "@/pages/homepage.vue";
import HowToPlay from "@/pages/howtoplay.vue";
import Tokenomics from "@/pages/tokenomics.vue";
import Leaderboard from "@/pages/leaderboard.vue";
import Refferal from "@/pages/refferal.vue";

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
    {
        path: "/tokenomics",
        name: "tokenomics",
        component: Tokenomics,
    },
    {
        path: "/leaderboard",
        name: "leaderboard",
        component: Leaderboard,
    },
    {
        path: "/refferal",
        name: "refferal",
        component: Refferal,
    },
    {
        path: "/cots",
        name: "cots",
        component: AboutMe,
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
       if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})
export default router;