<template>
  <div>
    <input v-model="firstName" placeholder="First name" />
    <input v-model="lastName" placeholder="Last name" />
    <br />
    {{ fullName }}
    <div class="container">
      <input type="number" v-model="incrementOne" />
      <h3>Get input: {{ incrementOne }}</h3>
      <h5>Set division by 2: {{ divideByTwo }}</h5>
    </div>
    <div class="container">
      <h1>Shop Watcher</h1>

      <div>
        Black Friday sale
        <strike>Was {{ oldDiscount }}%</strike>
        <strong> Now {{ discount }}% OFF</strong>
      </div>

      <br />
      <a href="#" @click="updateDiscount()">Increase Discount!</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      count: -1,
      divideByTwo: 0,
      oldDiscount: 5,
      discount: 10,
    };
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    incrementOne: {
      // getter
      get() {
        return this.count + 1;
      },
      // setter
      set(val) {
        this.count = val - 1;
        this.divideByTwo = val / 2;
      },
    },
  },
  methods: {
    updateDiscount() {
      this.discount = this.discount + 5;
    },
  },
  watch: {
    discount(newValue, oldValue) {
      this.oldDiscount = oldValue;
    },
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
}
input {
  padding: 10px 6px;
  margin: 20px 10px 10px 0;
}
a {
  display: inline-block;
  background: rgb(235, 50, 50);
  border-radius: 10px;
  font-size: 14px;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
}
</style>
