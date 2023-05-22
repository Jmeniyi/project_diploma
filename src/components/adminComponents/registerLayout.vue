<template>
    <div id="registerLayout">
        <div class="h-full bg-slate-800  text-center">
            <span class="text-auto font-normal text-red-600">
                {{ message }}
            </span>
            <form class="mx-8 mb-6 mt-2">
                <!-- Email input -->
                <div class="mb-2">
                    <input type="text" v-model="username"
                        class="form-control block w-full px-2 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Имя пользователя" required />
                </div>
                <!-- Password input -->
                <div class="mb-4">
                    <input type="password" v-model="password"
                        class="form-control block w-full px-2 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Введите пароль" />
                </div>
                <!-- Submit button -->
                <button type="submit"
                    class="inline-block px-7 py-4 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                    data-mdb-ripple="true" data-mdb-ripple-color="light" @click.prevent="createUser">
                    Зарегистрировать
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import store from '@/store/index.js'
export default {
    name: "registerLayout",
    data: () => ({
        store,
        username: '',
        password: '',
        showError: false,
        message: '',
    }),
    methods: {
        createUser() {
            const newUser = {
                username: this.username,
                password: this.password
            };
            axios
                //Блок POST
                .post('http://localhost:5000/auth/registration', newUser)
                .then(response => {
                    if (response.status === 200) {
                        this.message = response.data.message
                    }
                     this.username = ''
                     this.password = ''
                })
                .catch(error => {
                    this.message = error.response.data.message
                })
        },
    }

};
</script>