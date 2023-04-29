<template>
  <div id="vTable">
  <!-- Название колонок -->
      <table class="min-w-full text-left text-sm font-light">
        <thead class="border-l dark:border-neutral-500 text-center font-semibold">
          <tr class="border-r">
            <th scope="col" class="px-3 py-4">
              id
            </th>
            <th scope="col" class="px-3 py-4"
            v-for="(category, id) in uniqueKeys" :key="id">
              {{ category }}
            </th>
          </tr>
        </thead>
        <!-- Список товаров -->
        <tbody>
          <tr class="w-full border-b dark:border-neutral-500 text-center" 
          v-for="(item, id) in  filteredItems" 
          :key="id" :rowData="id">
            <td class="border-r font-medium dark:border-neutral-500"
            >{{ id + 1 }}</td>
            <td class="border-r font-medium dark:border-neutral-500"
            >{{ item.name }}</td>
            <td class="border-r font-medium dark:border-neutral-500"
            >{{ item.volume }}
            </td>
            <td class="border-r font-medium dark:border-neutral-500"
            >{{ item.ReleaseForm}}
            </td>
            <td class="border-r font-medium dark:border-neutral-500">{{
              item.productionDate }}</td>
            <td class="border-r font-medium dark:border-neutral-500"
             :style="{ backgroundColor: item.recipe === true ? 'red' : 'green' }">
              {{ item.recipe }}
            </td>
            <td class="border-r font-medium dark:border-neutral-500"
            >{{ item.quantity }}
            </td>
            <td class="border-r font-medium dark:border-neutral-500"
            >{{ item.price }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
export default {
  name: "vTable",
  data: () => ({}),
  props: {
    filteredItems: {
      type: Array,
      default: () => {
        return []
      }
    },
    uniqueKeys: {
      type: Array,
      default: () => {
        return []
      }
    },
  },
};
</script>


<!--
<const filteredItems =  this.dataFromDb
        .filter(item => item.name.toLowerCase()
        .includes(this.searchValue.toLowerCase()))
        .sort((a, b) => {
          let modifier = this.sortDirection;
          if (a[this.sortKey] < b[this.sortKey]) { return -1 * modifier; }
          if (a[this.sortKey] > b[this.sortKey]) { return 1 * modifier; }
          return 0;
        });
        return filteredItems
-->