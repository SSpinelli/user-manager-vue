<template>
  <main class="w-full max-h-screen">
  <h1 class="w-full mt-9 mb-9 text-center text-5xl font-mono text-white font-bold">Lista de Clientes</h1>
  <TableComponent />
  <div class="flex flex-col sm:flex-row w-full justify-around">
    <FilterOptions />
    <router-link 
      class="mt-3 mb-3 sm:p-3  sm:mt-28 sm:mb-28 h-10 flex justify-center items-center bg-yellow-500 rounded-md hover:bg-yellow-200" 
      to="cadastrarcliente"
    >
      Cadastrar um novo cliente
    </router-link>
  </div>
</main>
</template>

<script>
  import TableComponent from '../components/TableComponent.vue';
  import FilterOptions from '../components/FilterOptions.vue';
  import {api} from "../services/api"

  export default {
    name: "Home",
    components: {
      TableComponent,
      FilterOptions
    },
    async beforeMount() {
      const pessoas = await api.get("pessoas")
      const produtos = await api.get("produtos")
      const pedidos = await api.get("pedidos")

      this.$store.commit("changeClients", pessoas.data)
      this.$store.commit("changeProducts", produtos.data)
      this.$store.commit("changeOrders", pedidos.data)
    }
  }
</script>

<style>

</style>