<template>
  <div id="App">
    <div>
      <component :update-component="updateComponent" :is="currentComponent"></component>
    </div>
  </div>
</template>

<script>
import vHeader from './components/vHeader.vue'
import singIn from './components/singIn.vue'
export default {
  name: "App",
  data: () => ({
    route: 'vHeader',
  }),
  computed: {
    currentComponent() {
      switch (this.route) {
        case 'singIn':
          return singIn
        case 'vHeader':
          return vHeader
        default:
          return singIn
      }
    }
  },
  methods: {
    updateComponent(newValue) {
      if (newValue) {
        this.route = 'vHeader'
      } else {
        this.route = 'singIn'
      }
    }
  }
};
</script>