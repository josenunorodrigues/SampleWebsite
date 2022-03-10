<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Home from "./views/Home";

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
  },
};
</script>
