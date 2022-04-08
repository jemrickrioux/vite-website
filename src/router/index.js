import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/networks",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NetworksView.vue"),
  },
  {
    path: "/networks/:network",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SingleNetworkView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
