<template>
  <section>
    <div class="form">
      <label>
        Seleccione un producto
        <select name="producto" v-model="producto">
          <option v-bind:value="{nombre:'Xbox Series X', precio:14000, cantidadProducto:cantidad}">Xbox Series X - $14000</option>
          <option v-bind:value='{nombre:"Xbox Series S", precio:8000, cantidadProducto:cantidad}'>Xbox Series S - $8000</option>
          <option v-bind:value='{nombre:"PS5", precio:14000, cantidadProducto:cantidad}'>PS5 - $14000</option>
          <option v-bind:value='{nombre:"Nintendo Switch", precio:9000, cantidadProducto:cantidad}'>Nintendo Switch - $9000</option>
        </select>
      </label>
      <label>
        Cantidad a comprar
        <input type="number" v-model="cantidad" />
      </label>
      <label>
        <button type="button" @click="agregarProducto()">Agregar al carrito</button>
      </label>
    </div>
    <div>
      <h1>Carrito:</h1>
      <ul>
        <li v-for="(producto, index) in carrito" :key="index">
          Producto: {{ producto.nombre }} - Precio: ${{ producto.precio }} - Cantidad: {{ producto.cantidadProducto }}
        </li>
      </ul>
      <p>Hay {{carrito.length}} productos en el carrito</p>
      <p>Total a pagar: ${{total}}</p>
    </div>
    <div>
        <button type="button" @click="vaciarCarrito()">Vaciar carrito</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      total: 0,
      cantidad: 0,
      producto: Object,
      carrito: [],
    };
  },
  methods: {
    calcularTotal: function() {
        this.carrito.forEach(producto => {
            this.total += producto.precio * this.cantidad;
        });
    },
    agregarProducto: function () {
        this.carrito.push(this.producto);
        this.calcularTotal();
    },
    vaciarCarrito: function () {
        this.carrito = [];
        this.total = 0;
    },
  }
};
</script>
