<template>
  <div id="vHeader">
  <header class="flex justify-between items-center bg-gray-200 py-4 px-6">
    <div class="place-items-start">
      <form class="relative">
        <input type="search"
          class="bg-white py-2 pr-10 pl-4 rounded-lg w-64 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search..." v-model="searchValue">
        <button type="submit"
          class="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M13.885 13.886a8 8 0 111.414-1.414l4.243 4.242a1 1 0 01-1.415 1.415l-4.242-4.243zM8 14a6 6 0 100-12 6 6 0 000 12z"
              clip-rule="evenodd" />
          </svg>
        </button>
      </form>
    </div>
    <div class="place-items-center">
      <div class="logo">
      </div>
    </div>
    <div class="place-items-end">
      <div class="relative">
        <button 
        @click='resetFilter' 
        class="px-4 py-2 mr-2 text-white bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md hover:bg-blue-400">
          Сбросить фильтр
        </button>
        <button @click="isOpen = !isOpen" class="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700">
          Cортировать по...
        </button>
        <div v-show="isOpen" class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-10">
          <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-600 hover:text-white" value="quantity"
            @click="sortBy('quantity')">Колличеству
          </a>
          <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-600 hover:text-white" value="productionDate"
            @click="sortBy('productionDate')">Дате производства</a>
          <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-600 hover:text-white" value="name"
            @click="sortBy('name')">Наименованию</a>
            <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-600 hover:text-white" value="name"
            @click="sortBy('price')">Цене</a>
        </div>
      </div>
    </div>
  </header>
<vTable :filteredItems="filteredItems" :uniqueKeys="uniqueKeys" />
</div>
</template>

<script>
import axios from 'axios';
import vTable from '@/components/vTable.vue'
export default {
    name: "vHeader",
    data: () => ({
      db:[],
      isOpen: false,
    searchValue: '',
    sortDirection: 1,
    sortKey: ''
    }),
    components: {vTable },
    props: {
    dataFromDb: {
      type: Array,
      default: () => {
        return []
      }
    },
  },
  created() {
        axios
            .get('http://localhost:3000/api/mainPage')
            .then((response) => {
                console.log(typeof response + " data is taked");
                this.db = response.data
            })
            .catch((error) => {
                console.log(error)
            });
    },
  methods: {
    sortBy(key) {
      this.sortKey = key;
      this.sortDirection = this.sortDirection * -1;
    },
    resetFilter(){
      return this.sortKey = ''
    },
  },
  computed: {
    filteredItems() {
      const filteredItems =  this.db
        .filter(item => item.name.toLowerCase()
        .includes(this.searchValue.toLowerCase()))
        .sort((a, b) => {
          let modifier = this.sortDirection;
          if (a[this.sortKey] < b[this.sortKey]) { return -1 * modifier; }
          if (a[this.sortKey] > b[this.sortKey]) { return 1 * modifier; }
          return 0;
        });
        return filteredItems
    },
    uniqueKeys() {
      var uniqueKeys1 = Object.keys(this.db.reduce(function (result, obj) {
        return Object.assign(result, obj)
      }, {}))
      return uniqueKeys1
    },
  },


};
</script>


