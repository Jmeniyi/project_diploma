import { createStore } from 'vuex'
import axios from 'axios'

const url = 'http://localhost:5000/auth/items'

export default createStore({
  state: {
    dataDB: [],
    filteredItems: [],
    cart: [],
    itemsPerPage: 10,
    page: 1,
    searchValue: '',
    sortingKey: 'name',
    sortDirection: 1,
    showAllUsersLayout: false,
    isAdmin: false
  },
  mutations: {
    setData(state, payload) {
      state.dataDB = payload
    },
    ADD_TO_CART_COUNT: (state, payload) => {
      state.cart.push(payload);
    },
    removeItem(state, id) {
      state.cart.splice(id, 1)
    },
    SET_SEARCH_VALUE(state, newValue) {
      state.searchValue = newValue;
    },
    setSelectedValue(state, payload) {
      state.sortingKey = payload;
    },
  },
  actions: {
    fetchData(context) {
      axios.get(url)
        .then(response => {
          context.commit('setData', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    ADD_TO_CART: (context, payload, item) => {
      context.commit('ADD_TO_CART_COUNT', payload, item);
    },
    updateSearchValue({ commit }, newValue) {
      commit('SET_SEARCH_VALUE', newValue);
    },
    UPDATE_SORT_KEY({ commit }, key) {
      commit('SORT_KEY', key);
    },
  },
  getters: {
    dataDB: state => state.dataDB,
    total: state => {
      return state.cart.reduce((total, item) => {
        return total + item.price
      }, 0)
    },
    filteredItems: (state) => {
      const searchValue = state.searchValue.toLowerCase();
      const key = state.sortingKey;
      const itemsPerPage = state.itemsPerPage;
      const startIndex = (state.page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const filteredItems = state.dataDB
        .filter(item => item.name.toLowerCase()
        .includes(searchValue))
        .sort((a, b) => {
          if (a[key] < b[key]) { return -1 }
          if (a[key] > b[key]) { return 1 }
          return 0;
        });
      return filteredItems.slice(startIndex, endIndex);
    },
  },
})
/*
 
*/
