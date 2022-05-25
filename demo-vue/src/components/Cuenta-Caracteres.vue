<template>
    <div>
        <input type="text" v-model="texto" @keyup="contarCaracteres"/>
        <label>{{counter}} Caracteres escritos</label>
    </div>
</template>

<script>
export default {
  name: "CuentaCaracteres",
  beforeCreate() {
    console.log('Before created');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('Before mount');
  },
  mounted() {
    console.log('Mounted');
  },
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