<template>
  <div id="app">
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Home from "./views/pages/home/Home.vue";
import Header from "./views/components/header/Header.vue";
import Footer from "./views/components/footer/Footer.vue";

export default {
  name: "App",
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = "Mupi";
      },
    },
  },
  components: {
    Home,
    Header,
    Footer,
  },
};
</script>
<style src="./global.scss" lang="scss"></style>
