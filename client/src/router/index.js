import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import LandingPage from "../views/LandingPage.vue";
import Category from "../views/DashboardCategory.vue";
import Details from "../views/Details.vue";
import Cart from "../views/Cart.vue";
import History from "../views/History.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/history",
    name: "History",
    component: History,
  },
  {
    path: "/category/:category",
    name: "Category",
    component: Category,
  },
  {
    path: "/details/:product",
    name: "Details",
    component: Details,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
