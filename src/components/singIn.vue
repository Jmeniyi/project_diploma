<template>
    <div id="singIn">
        <section class="h-screen">
            <div class="container h-full items-center m-auto p-auto">
                <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div class="md:w-8/12 lg:w-5/12">
                        <div class="items-center text-center pb-10 text-4xl">
                            <h5>Своя Аптека</h5>
                        </div>
                        <div class=" border-2 border-sky-700 p-14 shadow-2xl">
                            <span v-if="disabledbtn == true" class="text-red-600">Неверный логин или пароль
                            </span>
                            <form>
                                <!-- Email input -->
                                <div class="mb-6">
                                    <input type="email" v-model="email"
                                        :class="validationmail == true ? 'trueWalidation' : ''"
                                        class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Введите почту" required />
                                </div>
                                <!-- Password input -->
                                <div class="mb-2">
                                    <input type="password" v-model="password"
                                        :class="password.length > 1 ? 'trueWalidation' : ''"
                                        class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Введите пароль" />
                                </div>
                                <!-- Submit button -->
                                <button type="submit"
                                    class="inline-block px-7 py-4 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                    data-mdb-ripple="true" data-mdb-ripple-color="light"
                                    :class="disabledbtn == true ? 'disabledBtn' : ''" :disabled="disabledbtn"
                                    @click="updateParent">
                                    Войти
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
var filter = /.+@.+\..+/;
export default {
    name: "singIn",
    data: () => ({
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }),
    props: ['update-component'],
    computed: {
        disabledbtn() {
            if (this.password.length > 1 && this.validationmail == true) {
                return false;
            } else {
                return true;
            }

        },
        validationmail() {
            if (filter.test(this.email)) {
                return true;
            } else {
                return false;
            }
        },
    },
    methods: {
    updateParent() {
    this.updateComponent(true)
    }
  }
    /* methods:{
        register(){
         const newUser = {
         userName: this.userName,
         email: this.email,
         password: this.password,
       }
       this.$store.commit('addNewUser', newUser); 
     }
        }*/
};
</script>

<style scoped>
.disabledBtn {
    opacity: 0.6;
    cursor: not-allowed;
}

;
</style>