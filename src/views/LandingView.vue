<template>
  <div class="page-content">
    <mapView />
  </div>
</template>

<script>
import mapView from "@/components/MapComponent.vue";
export default {
  components: {
    mapView,
  },
};
</script>

<style lang="scss" scoped>
.landing {
  width: 100%;
  height: 100%;
}
</style>
