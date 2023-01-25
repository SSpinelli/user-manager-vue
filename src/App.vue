<template>
  <section 
    class="bg-zinc-800 ml-3 mr-3 w-full sm:w-5/6 sm:m-auto xl:w-3/4 2xl:w-1/2 flex flex-col justify-center items-center border-2 border-zinc-900 rounded-xl shadow-md"
  >
    <Header />
    <router-view />
  </section>
</template>

<script>
import {api} from "./services/api.js"
import Header from "./components/Header.vue"

export default {
  data() {
    return {
      url: window.document.URL
    }
  },
  components: {
    Header,
  },
  methods: {
    getRow(event) {
      console.log(event.target.parentNode)
    }
  },
  async created() {
    try {
      if(this.$store.state.clients.length === 0) {
        const pessoas = await api.get("pessoas")
        const produtos = await api.get("produtos")
        const pedidos = await api.get("pedidos")

        this.$store.commit("changeClients", pessoas.data)
        this.$store.commit("changeProducts", produtos.data)
        this.$store.commit("changeOrders", pedidos.data)
      }
    } catch {
      window.alert("Servidor for do")
    }
  }
}
</script>
