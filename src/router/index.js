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
      path: "/admin/cadastrarProduto",
      name: "adminCadastroProduto",
      component: () => import("../views/AdminCadastro.vue"),
    },
    {
      path: "/admin/cadastrarAdmin",
      name: "adminCadastrarAdmin",
      component: () => import("../views/AdminCadastroAdmin.vue"),
    },
    {
      path: "/admin/editar/produto/:id",
      name: "adminEditarProduto",
      component: () => import("../views/EditCadastro.vue"),
    },
    {
      path: "/admin/editar/admin/:id",
      name: "adminEditarAdmin",
      component: () => import("../views/EditCadastroAdmin.vue"),
    },
  ],
});

export default router;
