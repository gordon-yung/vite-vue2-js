import Vue from "vue";
import VueRouter from "vue-router";

// 注册router插件;Vue.use() 方法用于安装 Vue.js 插件。
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes: [
    {
      path: "/",
      name: "root",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/404",
      name: "404",
      component: () => import("@/views/NotFound.vue"),
    },
  ],
});
router.beforeEach((_to, _from, next) => {
  next();
});
router.afterEach(() => {});
export default router;
