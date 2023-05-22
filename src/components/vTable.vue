<template>
  <div id="vTable" class="bg-gray-100 h-full">
    <!-- Название колонок -->
    <table class="table-fixed w-full h-4 overflow-hidden text-sm font-light">
      <thead class="border-l text-center font-semibold">
        <tr class="border-r">
          <th scope="col" class="px-3 py-4 w-8">
            id
          </th>
          <th scope="col" class="px-3 py-4 w-1/4">
            Название
          </th>
          <th scope="col" class="px-3 py-4">
            Обьём
          </th>
          <th scope="col" class="px-3 py-4">
            Форма продажи
          </th>
          <th scope="col" class="px-3 py-4">
            Дата изготовления
          </th>
          <th scope="col" class="px-3 py-4">
            Рецепт
          </th>
          <th scope="col" class="px-3 py-4">
            Колличество
          </th>
          <th scope="col" class="px-3 py-4">
            Цена
          </th>
          <th scope="col" class="px-3 py-4 w-24">

          </th>
        </tr>
      </thead>
      <!-- Список товаров -->
      <tbody class="max-h-36 overflow-hidden">
        <tr class="border-b dark:border-neutral-500 text-center" v-for="(item, id) in items" :key="id">
          <td class="border-r font-medium dark:border-neutral-500">
            {{ id + 1}}</td>
          <td class="border-r font-medium dark:border-neutral-500">
            {{ item.name }}</td>
          <td class="border-r font-medium dark:border-neutral-500">
            {{ item.volume }}
          </td>
          <td class="border-r font-medium dark:border-neutral-500">
            {{ item.ReleaseForm }}
          </td>
          <td class="border-r font-medium dark:border-neutral-500">
            {{ item.productionDate }}</td>
          <td class="border-r font-medium dark:border-neutral-500"
            :style="{ backgroundColor: item.recipe === true ? 'red' : 'green' }">
            {{ item.recipe }}
          </td>
          <td class="border-r font-medium dark:border-neutral-500">
            {{ item.quantity }}
          </td>
          <td class="border-r font-medium dark:border-neutral-500">
            {{ item.price }}
          </td>
          <td type="button"
            class="flex justify-center items-center bg-blue-500 hover:bg-blue-900 text-white font-bold m-1 py-1 px-2 rounded transition duration-150 ease-in-out"
            @click="ADD_TO_CART(item)">
            В корзину
          </td>
        </tr>
      </tbody>
    </table>
    <div class="space-x-2 text-white py-2 px-4 fixed bottom-0 left-1/2 transform -translate-x-1/2">
      <button type="button"
        class="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-2 rounded transition duration-150 ease-in-out"
        @click="prevPage" >
        Назад
      </button>
      <span
        class="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-2 rounded transition duration-150 ease-in-out">
        {{ store.state.page}} / {{ numPages}}</span>
      <button type="button"
        class="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-2 rounded transition duration-150 ease-in-out"
        @click="nextPage" >
        Врперёд
      </button>
    </div>
  </div>
</template>

<script>
import store from '@/store/index.js'
export default {
  name: "vTable",
  data: () => ({
    store,
  }),
  mounted() {
    this.$store.dispatch('fetchData')
  },
  computed: {
    dataArray() {
      return this.$store.state.dataDB || [];
    },
    items() {
      return this.$store.getters.filteredItems
    },
    numPages() {
      return Math.ceil(this.dataArray.length / this.$store.state.itemsPerPage);
    },
},
  methods: {
    ADD_TO_CART(item) {
      this.$store.dispatch('ADD_TO_CART', item);
    },
    nextPage() {
      if (this.$store.state.page < this.numPages - 1) this.$store.state.page ++;
    },
    prevPage() {
      if (this.$store.state.page > 1) this.$store.state.page --;
    },
  }
}
</script>


<!--

filteredItems() {
      const start = this.itemsPerPage * this.currentPage;
      const end = start + this.itemsPerPage;

      if (!Array.isArray(this.dataArray)) return [];
      const filteredItems = this.dataArray
        .filter(item =>{
         return item.name.toLowerCase()
         .includes(this.$store.state.searchValue.toLowerCase())
        })
         
      return filteredItems.slice(start, end)
    },
    nextPage() {
      if (this.currentPage < this.numPages - 1) this.currentPage++;
    },
    prevPage() {
      if (this.currentPage > 0) this.currentPage--;
    },
 numPages() {
      return Math.ceil(this.dataArray.length / this.itemsPerPage);
    },
-->