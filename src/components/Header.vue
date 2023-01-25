<template>
  <header class="w-full bg-yellow-600 rounded-tr-lg rounded-tl-lg">
    <nav class="flex w-full h-20 justify-around items-center">
      <img @click="backToHome" :src="logo" class="w-40 cursor-pointer"/>
      <div class="cursor-not-allowed">
        Adicionar novo pedido
      </div>
    </nav>
  </header>
</template>

<script>
  import escribaLogo from "../assets/escriba.png"
  export default {
    data() {
      return {
        logo: escribaLogo
      }
    },
    methods: {
      backToHome() {
        this.$router.push({name: "Home"})
      }
    }
  }
</script>

<style>
  header {
    display: flex;
    width: 100vw;
    flex: 1;
  }
</style>