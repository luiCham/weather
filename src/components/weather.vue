<template>
<div>
  <row>
    <p>HOLA FROM APLIFY TPM</p>
  </row>
  <row>
    <p class="weatherText" id="wText">{{weatherValue}}</p>
  </row>
  <row>
    <input type="range" v-model="weatherValue" min=-10 max=40 id="wInput">
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
