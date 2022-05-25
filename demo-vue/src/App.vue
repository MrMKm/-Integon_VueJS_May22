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
    <!-- <EjemploAsync/> -->
    <!-- <Greeting :greeting="'Hola'" :who="'Mundo'"/> -->
    <!-- <Repeat :config="{ times: 3, content: 'Hola' }"/> -->
    <Sloted>
      <template #image>
        <img src="https://picsum.photos/id/1015/300" />
      </template>
      <template #title>
        <h2>My Holiday picture</h2>
      </template>
      <template #description>
        <p>Here I can describe the contents of the picture.</p>
        <p>For example what we can see in the photo is a nice landscape.</p>
      </template>
    </Sloted>
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
import Greeting from './components/Greeting.vue'
import Repeat from './components/Repeat.vue'
import Sloted from './components/Sloted.vue'

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
    EjemploAsync,
    Greeting,
    Repeat,
    Sloted
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
