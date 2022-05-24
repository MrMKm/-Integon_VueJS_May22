<template>
  <div>
    <label>{{ number1 }} {{ operacion }} {{ number2 }} = {{ result }}</label>
    <!-- <div>
      <h1>{{ title }}</h1>
      <h2>{{ subtitle }}</h2>
      <ul>
        <li>{{ items[0] }}</li>
        <li>{{ items[1] }}</li>
        <li>{{ items[2] }}</li>
      </ul>
    </div> -->
  </div>
</template>

<style lang="scss">
/* typography.scss */
$color-green: #4fc08d;
$color-grey: #2c3e50;
$color-blue: #003366;

h1 {
  margin-top: 60px;
  text-align: center;
  color: $color-grey;

  + h2 {
    text-align: center;
    color: $color-green;
  }
}

ul {
  display: block;
  margin: 0 auto;
  max-width: 400px;
  padding: 30px;
  border: 1px solid rgba(0, 0, 0, 0.25);

  > li {
    color: $color-grey;
    margin-bottom: 4px;
  }
}
</style>

<script>
export default {
  name: "Matematico",
  props: {
    number1: Number,
    number2: Number,
    operacion: String,
  },
  data() {
    return {
      result: 50,
      title: "My list component!",
      subtitle: "Vue JS basics",
      items: ["Item 1", "Item 2", "Item 3"],
    };
  },
  methods: {
    calcular: function () {
      if (this.operacion === "+") this.result = this.number1 + this.number2;
      else if (this.operacion === "-")
        this.result = this.number1 - this.number2;
      else if (this.operacion === "*")
        this.result = this.number1 * this.number2;
      else if (this.operacion === "/")
        this.result = this.number1 / this.number2;
    },
  },
  watch: {
    $props: {
      handler() {
        this.calcular();
      },
      immediate: true,
    },
  },
};
</script>