<template>
  <div class="centered-container">
    <md-content class="md-elevation-3">
      <div class="title">
        <img src="/images/escom_logo.png" />
        <div class="md-title">Club de Desarrollo Web</div>
        <div class="md-body-1">Asistencia curso NodeJS B</div>
      </div>
      <div class="form">
        <md-field>
          <label>Email</label>
          <md-input v-model="asistencia.email" autofocus></md-input>
        </md-field>
      </div>
      <div class="actions md-layout md-alignment-center">
        <!--
        <a href="/resetpassword">Reset password</a>
        -->
        <md-button class="md-raised md-primary" @click="auth">Pasar asistencia</md-button>
      </div>
      <div class="loading-overlay" v-if="loading">
        <md-progress-spinner md-mode="indeterminate" :md-stroke="2"></md-progress-spinner>
      </div>
    </md-content>
    <div class="background" />
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      loading: false,
      asistencia: {
        email: ""
      }
    };
  },
  methods: {
    auth() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 5000);
    }
  }
};
</script>

<style lang="scss">
.centered-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  .title {
    text-align: center;
    margin-bottom: -5px;
    img {
      max-width: 300px;
    }
  }
  .actions {
    .md-button {
      margin: 0;
    }
  }
  .form {
    margin-bottom: 60px;
  }
  .background {
    background: url("/images/fondoescom.jpg");
    position: absolute;
    height: 100%;
    width: 100%;
  }
  .md-content {
    z-index: 1;
    padding: 40px;
    width: 100%;
    max-width: 400px;
    position: relative;
  }
  .loading-overlay {
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
