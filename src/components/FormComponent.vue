<template>
  <form 
    action="" 
    class="flex flex-col gap-10 mt-10 mb-4"
  >
    <label class="flex flex-col" for="id">
      <span class="text-white text-lg font-semibold mb-2">Id</span>
      <input 
        class="bg-zinc-800 pl-3 border-2 rounded-md border-yellow-500 h-10 placeholder:text-white text-white disabled:border-zinc-700 disabled:cursor-not-allowed" 
        type="number" 
        :disabled="!post"
        id="id"
        v-model="id"
      >
    </label>
    <label class="flex flex-col" for="nome">
      <span class="text-white text-lg font-semibold mb-2">Nome</span>
      <input 
        class="bg-zinc-800 pl-3 border-2 rounded-md border-yellow-500 h-10 placeholder:text-white text-white" 
        type="text" 
        v-model="nome"
        id="nome"
      >
    </label>
    <label class="flex flex-col" for="nome">
      <span class="text-white text-lg font-semibold mb-2">CPF</span>
      <input 
        class="bg-zinc-800 pl-3 border-2 rounded-md border-yellow-500 h-10 placeholder:text-white text-white" 
        type="text"
        v-model="cpf"
        maxlength="11"
        min="0"
      >
    </label>
    <label class="flex flex-col" for="nome">
      <span class="text-white text-lg font-semibold mb-2">Data de Nascimento</span>
      <input 
        class="bg-zinc-800 pl-3 pr-3 border-2 rounded-md border-yellow-500 h-10 placeholder:text-white text-white"
        type="date"
        v-model="dataDeNascimento"
      >
    </label>
    <button 
      type="submit"
      :disabled="!nome || !checkCpf || !dataDeNascimento || !id"
      @click.prevent="handleSubmit" 
      class="mt-3 mb-3 h-10 bg-yellow-500 rounded-md hover:bg-yellow-200 disabled:bg-zinc-500"
    >
      {{buttonName}}
    </button>
    <button 
      class="h-10 bg-red-800 rounded-md mb-3 hover:bg-red-400"
      @click.prevent="deleteUser"
      v-show="!post"
    >
      Deletar esse Cliente
    </button>
  </form>
</template>

<script>
  import { api } from "../services/api.js"
  import dayjs from "dayjs"
  export default {
    nam: "Client",
    props: ["post"],
    data() {
      return {
        id: "",
        nome: "",
        cpf: "",
        dataDeNascimento: "",
      }
    },
    methods: {
      async handleSubmit() {
        const updateInfo = {
          id: this.id,
          nome: this.nome,
          cpf: this.cpf,
          dataNascimento: this.dataDeNascimento
        }

        if(!this.post) {
          await api.patch(`pessoas/${this.$route.params.id}`, updateInfo)
          this.$router.push({name: "Home"})
        } else {
          try {
            await api.post(`pessoas`, updateInfo)
            this.$router.push({name: "Home"})
          } catch(err) {
            window.alert("Esse id já é utilizado por outro cliente")
            console.log(err)
          }
        }
      },
      async deleteUser() {
        await api.delete(`pessoas/${this.$route.params.id}`)

        this.$router.push({name: "Home"})
      }
    },
    async created() {
      if(!this.post) {
        const response = await api.get(`/pessoas/${this.$route.params.id}`)

        this.id = response.data.id
        this.nome = response.data.nome
        this.cpf = response.data.cpf
        this.dataDeNascimento = dayjs(response.data.dataNascimento).format("YYYY-MM-DD")
      }
    },
    computed: {
      checkCpf() {
        if(this.cpf.length < 11) {
          return false
        }

        const checkEveryDigit = this.cpf.split("").every((digit) => ["0","1","2","3","4","5","6","7","8","9"].includes(digit))

        if (!checkEveryDigit) {
          window.alert("todos os digitos do CPF precisam ser números")
        }

        return checkEveryDigit
      },
      formatDate() {
        
        return `${dayjs(this.dataDeNascimento).format("YYYY-MM-DD")}`
      },
      buttonName() {
        return this.post ? "Criar Novo Cliente" : "Salvar Informações"
      }
    }
  }
</script>

<style>

</style>