<template>
  <div id="vHeader">
    <header class="bg-gray-200 py-4">
      <div class="flex justify-between items-center">
        <form class="w-1/4 pr-4 px-4 w-2">
          <searchBar />
        </form>
        <div class="flex justify-center w-1/3" v-show="$store.state.isAdmin == true">
          <adminHeader />
        </div>
        <div class="flex justify-end w-1/3">
          <filterBy />
          <button class="static cursor-pointer items-center mx-4 rounded-md" @click="showCart">
            <div class="relative mr-3">
              <svg class="h-10 w-10 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <div
                class="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                {{ $store.state.cart.length }}
              </div>
            </div>
          </button>
          <div v-show="showCartLayout">
          <cartLayout/>
        </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import store from '@/store/index.js'
import searchBar from '@/components/searchBar.vue'
import filterBy from '@/components/filterBy.vue'
import cartLayout from '@/components/cartLayout.vue'
import adminHeader from '@/components/adminComponents/adminHeader.vue'
export default {
  name: "vHeader",
  data: () => ({
    store,
    isOpen: false,
    searchValue: '',
    isAdmin: false,
    showCartLayout: false,
  }),
  components: { searchBar, filterBy, adminHeader,cartLayout },
  methods: {
    showCart(){
        this.showCartLayout = !this.showCartLayout
      },
  }
};
</script>
