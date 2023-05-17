<template>
  <div id="filterBy">
    <div class="relative inline-block mr-12 w-max">
      <select
      id="sort" @change="setSortingOption" class="form-select py-2.5 text-base bg-blue-500 hover:bg-blue-700 block text-white rounded shadow-sm focus:outline-none">
        <option value="name">Сорртировать по названию</option>
        <option value="price">Сорртировать по цене</option>
        <option value="productionDate">Сорртировать по дате</option>
        <option value="quantity">Сорртировать по колличеству</option>
      </select>
    </div>
  </div>
</template>

<script>
import store from '@/store/index.js'
export default {
  name: "filterBy",
  data: () => ({
    store,
  }),
  methods: {
    setSortingOption(event) {
    const selectedValue = event.target.value;
    this.$store.commit('setSelectedValue', selectedValue);
  },
  }
};
</script>