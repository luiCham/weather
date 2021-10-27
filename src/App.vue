<template>
  <div id="app">
    <Weather/>
  </div>
</template>

<script>
import Weather from './components/weather.vue'

export default {
  name: 'App',
  components: {
    Weather
  }
}
</script>

<style>
@font-face {
    font-family: 'Chopin Script';
    src: local("Chopin Script"),
    url(./fonts/ChopinScript.ttf) format("truetype");
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
