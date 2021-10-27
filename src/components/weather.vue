<template>
<div>
  <row>
    <p class="title-text elegant-font">Set Weather App</p>
  </row>
  <row>
    <p class="weather-text elegant-font" id="wText">{{weatherValue}}°</p>
  </row>
  <row>
    <input type="range" class="form-range" v-model="weatherValue" min=-10 max=40 id="wInput">
  </row>
</div>
</template>

<script>
export default {
  name: 'Wheather',
  data() {
    return {
      weatherValue: 20
    };
  }
}
</script>

<style scoped>
  p.weather-text{
    font-size: 1000%;
  }

  p.title-text{
    font-size: 500%;
  }

  p.elegant-font{
    font-family: 'Chopin Script';
  }
</style>