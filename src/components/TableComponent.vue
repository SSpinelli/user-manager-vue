<template>
  <div class="max-h-96 overflow-x-hidden overflow-y-scroll">
    <table class="w-full max-h-20 m-auto">
      <thead class="sticky top-0">
        <tr class="flex justify-evenly items-center h-11 bg-zinc-200">
          <th class="w-1/5 text-center" v-for="(value) in tableHeaders" :key="value">{{value}}</th>
        </tr>
      </thead>
      <tbody>
        <tr 
          class="flex justify-evenly items-center h-11" 
          v-for="(value, index) in filteredClients"
          :class="{even: index % 2 === 0, odd: index % 2 !== 0}"
          :key="value">
          <td 
            class="w-1/5 text-center box-content" 
            @click="getId" v-for="info in value" 
            :key="info.id"
          >
            {{info}}
          </td>
          <button
            class=" sm:block w-1/5" 
            @click="changeRouteToClient"
          >
            Editar Cliente
          </button>
        </tr>
      </tbody>
    </table>
</div>
</template>

<script>
export default {
  name: "TableComponent",
  methods: {
    changeRouteToClient(event) {
      this.$router.push({name: "Client", params: { id: event.target.parentNode.childNodes[1].innerText}})
    },
  },
  computed: {
    tableHeaders() {
      const client = this.$store.state.clients[0]

      if (client) {
        const headersArray = [...Object.keys(client), "action"]

        if(window.innerWidth < 640) {
          headersArray.pop()
        }

        return headersArray
      }
      return []
    },
    sizeScreen() {
      return window.innerWidth
    },
    filteredClients() {
      const clients = this.$store.state.clients
      const value = this.$store.state.filterText
      const key = this.$store.state.filterOption
      if(value && key) {
        if(key === "id") {
          return clients.filter((user) => String(user[key]).includes(value))
        }
        return clients.filter((user) => user[key].toLowerCase().includes(value.toLowerCase()))
      }
      return this.$store.state.clients
    }
  }
}
</script>

<style>
  .even {
    background-color: #fefce8;
  }

  .odd {
    background-color: #fef9c3;
  }
</style>