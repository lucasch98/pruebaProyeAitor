<template>
  <v-app id="App" :style="{ background: '#9FD8DF'}">
    <Navbar />
    <v-main>
      <router-view />
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from './components/Footer.vue'

export default {
  name: "App",
  components: {
    Navbar,
    Footer 
  },
  data: () => ({}),
};
</script>

<style>

</style>
