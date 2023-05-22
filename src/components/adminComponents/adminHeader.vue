<template>
    <div id="adminHeader">
         <div class="mx-2 space-x-2 flex justify-center">
          <button class="w-2/5 bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 rounded" 
          @click="showRegister">
            Зарегистрировать нового пользователя
          </button>
            <div v-show="showRegisterLayout" class="w-80 z-50 mt-20 absolute rounded-lg bg-green-100">
              <registerLayout />
            </div>
            <button class="w-2/5 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded" 
            @click="showAllUsers">
             Зарегистрированные пользователи
            </button>
              <div v-show="showAllUsersLayout" class="w-80 z-50 mt-20 absolute rounded-lg bg-green-100">
                <allUsersLayout/>
              </div>
            </div>
           <!--ADMIN-->
      </div>
  </template>
  
  <script>
  import store from '@/store/index.js'
  import registerLayout from '@/components/adminComponents/registerLayout.vue'
  import allUsersLayout from '@/components/adminComponents/allUsersLayout.vue'
  export default {
    name: "adminHeader",
    data: () => ({
      store,
      isOpen: false,
      searchValue: '',
      isAdmin: false,
      showRegisterLayout:false,
      showAllUsersLayout:false,
    }),
    components: { registerLayout,allUsersLayout },
    methods:{
      showRegister(){
        this.showRegisterLayout = !this.showRegisterLayout
      },
      showAllUsers(){
        this.showAllUsersLayout = !this.showAllUsersLayout
      }
    }
  };
  </script>