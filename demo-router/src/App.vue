<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div id="nav">
      <ul>
        <li><router-link to="/clientes">Clientes</router-link></li>
        <li><router-link to="/facturas">Facturas</router-link></li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
import ClientesComponent from './components/Clientes-Component.vue'
import FacturasComponent from './components/Facturas-Component.vue'

export default {
  name: 'App',
  components: {
    ClientesComponent,
    FacturasComponent
  }
}
</script>

<style>
</style>
