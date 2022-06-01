import Vue from "vue";
import VueRouter from "vue-router";
import LandingView from "../views/LandingView.vue";
import FeedView from "../views/FeedView.vue";
import CreditsView from "../views/AboutView.vue";
import DebugView from "../views/DebugView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LandingView",
    component: LandingView,
  },
  {
    path: "/close",
    redirect: "/",
  },
  {
    path: "/feed",
    name: "feed",
    component: FeedView,
  },
  {
    path: "/about",
    name: "about",
    component: CreditsView,
  },
  {
    path: "/debugInfo",
    name: "debugInfo",
    component: DebugView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
