<template>
  <div>
    <nav>
      <div class="title">Live-Action Map</div>
      <div class="links">
        <router-link class="link" to="/">Map</router-link>
        <router-link class="link" to="/feed">Feed</router-link>
        <router-link class="link" to="/about">About</router-link>
      </div>
      <div class="refresh">
        <i v-if="refreshStatus" class="fa-solid fa-arrows-rotate"></i>
        <i v-else class="fa-solid fa-arrows-rotate fa-spin"></i>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      refreshStatus: true,
    };
  },
};
</script>

<style lang="scss" scoped></style>
