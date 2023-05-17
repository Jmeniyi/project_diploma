<template>
    <div id="allUsersLayout">
        <div class="h-full w-auto bg-slate-800">
            <span class="text-auto font-normal text-red-600">
                {{ message }}
            </span>
            <table class="h-full w-full bg-slate-800  text-center">
                <thead>
                    <tr class="border-r">
                        <th scope="col" class="px-3 py-4">
                            id
                        </th>
                        <th scope="col" class="px-3 py-4">
                            Имя пользователя
                        </th>
                        <th scope="col" class="px-3 py-4">
                           Роль
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="w-full border-b dark:border-neutral-500 text-center" 
                    v-for="(user, id) in users" 
                    :key="id" :rowData="id">
                    <td class="border-r font-medium dark:border-neutral-500"
                    >{{ id + 1 }}</td>
                    <td class="border-r font-medium dark:border-neutral-500"
                    >{{ user.username }}</td>
                    <td class="border-r font-medium dark:border-neutral-500"
                    >{{ user.roles }}
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
const token = localStorage.getItem('jwtToken')
import axios from 'axios';
import store from '@/store/index.js'
export default {
    name: "allUsersLayout",
    data: () => ({
        store,
        showError: false,
        message: '',
        users: null
    }),
    created() {
        axios.get('http://localhost:5000/auth/users', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then(response => {
                this.users = response.data
            })
            .catch(error => {
                this.message = error.response.data.message
            })
    },

};
</script>
/*
computed:{
    uniqueKeys() {
  var uniqueKeys = Object.keys(this.users.reduce(function (result, obj) {
    return Object.assign(result, obj)
  }, {}))
  return uniqueKeys
},
},*/