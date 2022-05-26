<template>
    <div>
        <button @click="botonClick()">Click me!</button>
    </div>
</template>

<script>
export default {
  data() {
      return {
          mensaje: "Mensaje del evento"
      }
  },
  methods: {
      botonClick: function() {
        this.$emit('TriggerNotificacion', this.mensaje);
      },
  },
};
</script>