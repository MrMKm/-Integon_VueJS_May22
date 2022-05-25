<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <Matematico :number1="10" :number2="10" operacion="/"/>
    <CuentaCaracteres/> -->
    <!-- <PugTest/> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <EjemploDirectivas/> -->
    <!-- <EjemploDirectivas2/> -->
    <!-- <CarritoCompras/> -->
    <!-- <EjemploData/> -->
    <!-- <EjemploData2/> -->
    <!-- <EjemploData3/> -->
    <EjemploAsync/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Matematico from './components/Matematico.vue'
import PugTest from './components/Pug-Test.vue'
import CuentaCaracteres from './components/Cuenta-Caracteres.vue'
import EjemploDirectivas from './components/Ejemplo-Directivas.vue'
import EjemploDirectivas2 from './components/Ejemplo-Directivas-2.vue'
import CarritoCompras from './components/CarritoCompras.vue'
import EjemploData from './components/Ejemplo-Data.vue'
import EjemploData2 from './components/Ejemplo-Data2.vue'
import EjemploData3 from './components/Ejemplo-Data3.vue'
import EjemploAsync from './components/Ejemplo-Async.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Matematico,
    PugTest,
    CuentaCaracteres,
    EjemploDirectivas,
    EjemploDirectivas2,
    CarritoCompras,
    EjemploData,
    EjemploData2,
    EjemploData3,
    EjemploAsync
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
