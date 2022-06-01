import Vue from "vue";
import VueRouter from "vue-router";
import LandingView from "../views/LandingView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LandingView",
    component: LandingView,
  },
  {
    path: "close",
    redirect: "/",
  },
];

const router = new VueRouter({
  routes,
});

export default router;
