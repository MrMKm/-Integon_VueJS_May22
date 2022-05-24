<template>
  <div>
    <label>{{number1}} {{operacion}} {{number2}} = {{result}}</label>
  </div>
</template>

<script>
export default {
  name: 'Matematico',
  props: {
    number1: Number,
    number2: Number,
    operacion: String
  },
  data() {
    return {
        result: 50
    }
  },
  methods: {
    calcular: function() {
        if(this.operacion === '+')
            this.result = this.number1 + this.number2

        else if(this.operacion === '-')
            this.result = this.number1 - this.number2

        else if(this.operacion === '*')
            this.result = this.number1 * this.number2

        else if(this.operacion === '/')
            this.result = this.number1 / this.number2
    }
  },
  watch: {
    $props: {
        handler() {
            this.calcular();
        },
        immediate:true
    }
  }
}
</script>