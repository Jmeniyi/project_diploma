<template>
  <div id="searchBar">
  <form class="relative">
    <input type="search"
      class="bg-white py-2 pr-10 pl-4 rounded-lg w-64 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Search..." v-model="searchValue">
    <button type="submit"
    @click="search"
      class="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
    </button>
  </form>
</div>
</template>

<script>
import store from '@/store/index.js'
export default {
  name: "searchBar",
  data: () => ({
    store,
  }),
  computed: {
    searchValue: {
      get() {
        return this.$store.state.searchValue;
      },
      set(newValue) {
        this.$store.dispatch('updateSearchValue', newValue);
      },
    },
  },


};
</script>