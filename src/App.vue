<template>
  <div id="app">
    <navBar />
    <router-view />
  </div>
</template>

//
<script>
import navBar from "@/components/NavBar.vue";
export default {
  components: {
    navBar,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
