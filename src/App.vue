<template>
  <div id="app">
    <app-canvas></app-canvas>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import AppCanvas from './components/AppCanvas'

export default {
  name: 'App',
  components: {
    AppCanvas
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-color: black;
}
</style>
