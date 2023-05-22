import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/AdminView.vue"),
    },
    {
      path: "/admin/cadastrar",
      name: "adminCadastro",
      component: () => import("../views/AdminCadastro.vue"),
    },
    {
      path: "/admin/editar/:id",
      name: "adminEditar",
      component: () => import("../views/EditCadastro.vue"),
    },
  ],
});

export default router;
