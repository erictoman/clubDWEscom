<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <entrada />
  </div>
</template>

<script>
import entrada from "./components/entrada";
export default {
  name: "App",
  components: { entrada }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
