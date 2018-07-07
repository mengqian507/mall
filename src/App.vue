<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Home from './pages/home/Home'
import Detail from './pages/detail/Detail'
var curComponent
export default {
  name: 'App',
  components: {
    Home,
    Detail
  },
  methods: {
    setComponent (component) {
      curComponent = component
    }
  },
  created () {
    this.$router.push({path: '/'})
  }
}
window["receiveMsgFromNative"] = function () {
  curComponent.receiveMsgFromParent()
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
