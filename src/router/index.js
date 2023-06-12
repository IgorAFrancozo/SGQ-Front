import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/CatalogoHome.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/PagAdminHome.vue"),
    },
    {
      path: "/admin/cadastrar",
      name: "adminCadastro",
      component: () => import("../views/PagAdminCadastroProduto.vue"),
    },
    {
      path: "/admin/editar/:id",
      name: "adminEditarProduto",
      component: () => import("../views/PagAdminEditProduto.vue"),
    },
	{
		path: "/admin/admEdit/:id",
		name: "adminEditarAdm",
		component: () => import("../views/PagAdminEditAdmin.vue"),
	  },
	{
		path: "/admin/cadastroAdm",
		name: "cadastroDeAdmin",
		component: () => import("../views/PagAdminCadastroAdmin.vue"),
	  },
  ],
});

export default router;
