<template>
  <div>
    <div class="modal" :class="{ 'is-active': modalActivo }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Registro</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Usuario:</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input
                    v-model="nombre"
                    class="input is-info"
                    type="text"
                    placeholder="Juan Perez"
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button @click="this.accept" class="button is-info">Aceptar</button>
          <button @click="this.close" class="button is-danger">Cancelar</button>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      modalActivo: true,
      nombre: ""
    };
  },
  methods: {
    close() {
      this.modalActivo = false;
    },
    accept() {
      this.$emit("registrar", this.nombre);
    }
  }
};
</script>
