<template>
    <div id="mainPage">
        <v-header/>
        <v-table/>
    </div>
    <router-view/>
</template>

<script>
import vHeader from '@/components/vHeader';
import vTable from '@/components/vTable.vue'
export default {
    name: "mainPage",
    data: () => ({
    }),
    components:{vHeader,vTable},
}      
</script>