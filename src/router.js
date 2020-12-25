import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/article",
      name: "article",
      component: () => import("./")
    },
    {
      path: "/article/:id",
      name: "article-details",
      component: () => import("./")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./")
    }
  ]
});