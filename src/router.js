import { createWebHistory, createRouter } from "vue-router";

import Home from "./pages/Home.vue"
import CadastrarCliente from "./pages/CadastrarCliente.vue"
import Client from "./pages/Client.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/cadastrarcliente",
    name: "CadastrarCliente",
    component: CadastrarCliente
  },
  {
    path: "/client/:id",
    name: "Client",
    component: Client,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
