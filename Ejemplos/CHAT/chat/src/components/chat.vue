<template>
  <div class="section">
    <div class="box">
      <div>
        <h1 class="title">Usuario: {{ nombre }}</h1>
      </div>
      <div class="box" style="height:100px"></div>
      <div>
        <div class="columns">
          <div class="column">
            <p class="control">
              <input
                class="input is-info is-fullwidth"
                type="text"
                placeholder="Juan Perez"
              />
            </p>
          </div>
          <div class="column">
            <button class="button is-fullwidth">Enviar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nombre: "Eric"
    };
  },
  methods: {}
};
</script>
