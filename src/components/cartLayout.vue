<template>
    <div id="cartLayout">
        <div class="z-50 w-auto h-2/3 overflow-scroll absolute top-20 right-5 right-0 bg-white p-4 border shadow-md">
            <table class="table-fixed bg-slate-800  text-center">
                <thead>
                    <tr class="border-r overflow-wrap break-words ">
                        <th scope="col" class="px-3 py-4">
                            Название
                        </th>
                        <th scope="col" class="px-3 py-4">
                            Цена
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="w-10 border-b dark:border-neutral-500 text-center" v-for="(item, id) in itemsCart"
                        :key="id">
                        <td class="border-r font-auto dark:border-neutral-500">{{ item.name }}</td>
                        <td class="border-r font-auto dark:border-neutral-500">{{ item.price }}
                        </td>
                        <td @click="deleteItem(id)" class="border-r text-white font-medium bg-red-700">Удалить
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="border-b mt-2">
               Общая сумма : {{ $store.getters.total }} Рублей
            </div>
            <button v-show="store.state.cart.length >= 1" class="border-b mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Купить 
              </button>
        </div>
    </div>
</template>

<script>
import store from '@/store/index.js'
export default {
    name: "cartLayout",
    data: () => ({
        store,
    }),
    computed: {
        itemsCart() {
            return this.$store.state.cart
        },
    },
    methods:{
        deleteItem(id){
            this.$store.commit('removeItem', id)
        }
    }
}
</script>