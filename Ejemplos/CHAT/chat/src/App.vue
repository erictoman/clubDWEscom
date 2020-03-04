<template>
  <div id="app">
    <chat />
    <entrada @registrar="this.verNombre" />
  </div>
</template>

<script>
import entrada from "./components/entrada";
import chat from "./components/chat";
export default {
  name: "App",
  components: { entrada, chat },
  methods: {
    verNombre(nombre) {
      alert(nombre);
    }
  }
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
