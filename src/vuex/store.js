export default {
  state: {
    clients: [],
    products: [],
    orders: [],
    filterText: "",
    filterOption: "",
  },
  mutations: {
    changeClients(state, payload) {
      state.clients = payload
    },
    changeProducts(state, payload) {
      state.products = payload
    },
    changeOrders(state, payload) {
      state.orders = payload
    },
    changeFilter(state, payload) {
      state.filterText = payload.textField
      state.filterOption = payload.filter
    }
  }
}