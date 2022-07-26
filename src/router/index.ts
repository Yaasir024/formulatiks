import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Lotion from "../views/Lotion.vue";
import Faqs from "../views/FaqsView.vue";
import Contact from "../views/ContactView.vue";
import Plans from "../views/PlansView.vue";
import Login from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/calculator",
      name: "calculator",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Calculator.vue"),
    },
    {
      path: "/calculator/lotion",
      name: "lotion",
      component: Lotion,
    },
    {
      path: "/faqs",
      name: "faqs",
      component: Faqs,
    },
    {
      path: "/contact-us",
      name: "contact-us",
      component: Contact,
    },
    {
      path: "/plans",
      name: "plans",
      component: Plans,
    },
    {
      path: "/account/login",
      name: "login",
      component: Login,
    },
  ],
});

export default router;
