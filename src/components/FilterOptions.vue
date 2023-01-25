<template>
  <div class="flex flex-col justify-center">
    <div class="flex justify-center gap-11 mt-3 sm:gap-0 sm:flex-col sm:w-44 mb-3 text-white">
      <label for="id" class="flex justify-between">
        ID
        <input 
          name="filter" 
          value="id" 
          id="id" 
          type="radio" 
          v-model="filter"
        >
      </label>
      
      <label for="nome" class="flex justify-between">
        Nome
        <input 
          name="filter" 
          value="nome" 
          id="nome" 
          type="radio" 
          v-model="filter"
        >
      </label>
      <label for="cpf" class="flex justify-between">
        CPF
      <input 
        name="filter" 
        value="cpf" 
        id="cpf" 
        type="radio" 
        v-model="filter"
      >
      </label>
      <label for="dateBirth" class="flex justify-between">
        Data de Nascimento
        <input 
          name="filter" 
          value="dataNascimento" 
          id="dateBirth" 
          type="radio" 
          v-model="filter"
        >
      </label>
    </div>
    <input
      type="text"
      class="bg-zinc-800 pl-3 border-2 rounded-md border-yellow-500 h-10 placeholder:text-white text-white" 
      placeholder="Escreva aqui..."
      v-model="textField"
    >
    <button class="mt-3 h-10 bg-yellow-500 rounded-md hover:bg-yellow-200" @click="handleClick">{{nameButton}}</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        filter: "",
        textField: "",
        nameButton: "Filtrar"
      }
    },
    methods: {
      handleClick() {
        this.$store.commit("changeFilter", {filter: this.filter, textField: this.textField})
      }
    },
  }
</script>

<style>

</style>