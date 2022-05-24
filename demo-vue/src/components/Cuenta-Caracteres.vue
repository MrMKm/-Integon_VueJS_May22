<template>
    <div>
        <input type="text" v-model="texto" @keyup="contarCaracteres"/>
        <label>{{counter}} Caracteres escritos</label>
    </div>
</template>

<script>
export default {
  name: "CuentaCaracteres",
  props: {
  },
  data() {
    return {
        counter: 0,
        texto: ""
    };
  },
  methods: {
    contarCaracteres: function () {
      this.counter = this.texto.length;
    },
  },
  watch: {
    $props: {
      handler() {
        this.contarCaracteres();
      },
      immediate: true,
    },
  },
};
</script>