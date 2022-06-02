<template>
  <div class="about">
    <div class="content">
      <div class="holder">
        <div class="section-title">Contributors:</div>
        <div class="section">
          <contributor
            v-for="(contributor, index) in contributors"
            :key="index"
            :contributor="contributor"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import contributor from "@/components/ContributorComponent.vue";

import axios from "axios";
export default {
  components: {
    contributor,
  },
  data() {
    return {
      contributors: [],
    };
  },
  async mounted() {
    let that = this;
    axios.get("/api/contributors").then((res) => {
      that.contributors = res.data;
    });
  },
};
</script>

<style lang="scss" scoped>
.about {
  background-color: rgb(235, 235, 235);
  height: calc(100vh - 50px);
  width: 100vw;
  overflow: hidden;
}
.content {
  margin-left: 40px;
  margin-right: 40px;
  background-color: whitesmoke;
  height: calc(100vh - 70px);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  overflow: auto;
}
.holder {
  padding: 10px;
}
.section-title {
  font-size: 35px;
}

.section {
  display: flex;
  padding-top: 25px;
  flex-wrap: wrap;
  align-items: center;
}
</style>
