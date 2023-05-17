<template>
    <div id="singIn">
        <section class="h-screen">
            <div class="container h-full items-center m-auto p-auto">
                <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div class="md:w-8/12 lg:w-5/12">
                        <div class="animate-pulse items-center text-center pb-10 text-6xl text-blue-700">
                            <h5 class="">Своя Аптека</h5>
                        </div>
                        <div class="border-2 border-sky-700 p-14 shadow-2xl">
                            <p v-show="showError" class="text-center text-red-600">
                                Неверный логин или пароль
                            </p>
                            <form>
                                <!-- Email input -->
                                <div class="mb-6">
                                    <input type="text" v-model="username"
                                        class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Введите почту" required />
                                </div>
                                <!-- Password input -->
                                <div class="mb-2">
                                    <input type="password" v-model="password"
                                        class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Введите пароль" />
                                </div>
                                <!-- Submit button -->
                                <button type="submit"
                                    class="inline-block px-7 py-4 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                    data-mdb-ripple="true" data-mdb-ripple-color="light" @click.prevent="login">
                                    Войти
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <router-view/>
</template>

<script>
import setAuthHeader from '@/setAuth/setAuthHeader';
import axios from 'axios';
export default {
    name: "singIn",
    data: () => ({
        username: '',
        password: '',
        showError: false,
    }),
    methods: {
        login() {
            axios
            //Блок POST
                .post('http://localhost:5000/auth/login', {
                    username: this.username,
                    password: this.password
                })
                .then(response => {
                    localStorage.setItem('jwtToken', response.data.token);
                    setAuthHeader(response.data.token);
                    if (response.data.user.roles[0] == 'ADMIN') {
                        this.$store.state.isAdmin = true
                        this.$router.push('/mainPage')
                    }
                    if (response.data.user.roles[0] !== 'ADMIN' && response.status === 200) {
                      this.$router.push('/mainPage')
                      console.log(response.data.user.roles)
                    }
                })
                .catch(error => {
                    if (error.response.status === 400) {
                        this.showError = true;
                    }
                })
        },
    }

};
</script>

<style scoped>
.disabledBtn {
    opacity: 0.6;
    cursor: not-allowed;
}

;
</style>