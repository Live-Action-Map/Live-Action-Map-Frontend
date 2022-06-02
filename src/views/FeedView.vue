<template>
  <div class="feed">
    <div class="listing">
      <div v-for="(item, index) in feed" :key="index" class="feed-item">
        <div class="icon"><i class="fab fa-twitter"></i></div>
        <div class="feed-text">{{ item.text }}</div>
        <a :href="`https://twitter.com/i/web/status/${item.id}`" target="_blank"
          >See more <i class="fas fa-angle-right"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
import { io } from "socket.io-client";
import axios from "axios";
export default {
  data() {
    return {
      feed: [],
    };
  },
  mounted() {
    let that = this;
    const socket = io();
    socket.on("feedAdd", function (data) {
      that.feed.unshift(data.message);
    });
    axios.get("/api/markers").then((res) => {
      console.log(res.data[0]);
      if (res.data) {
        that.feed = res.data;
      }
    });
  },
  watch: {
    feed: function () {
      if (this.feed.length > 100) {
        this.feed.splice(-1);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.feed {
  background-color: rgb(235, 235, 235);
  height: calc(100vh - 50px);
  width: 100vw;
  overflow: hidden;
  .listing {
    margin-left: 40px;
    margin-right: 40px;
    background-color: whitesmoke;
    height: calc(100vh - 70px);
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    padding-top: 20px;
    overflow: auto;
    gap: 15px;
    .feed-item {
      margin-left: 40px;
      border-radius: 15px;
      margin-top: 30px;
      padding: 10px;
      margin-right: 40px;
      background-color: #1da1f2;
      box-shadow: rgb(230, 230, 230) 4px 4px 5px;
      .icon {
        position: relative;
        top: -15px;
        left: -15px;
        i {
          font-size: 30px;
          padding: 10px;
          border-radius: 50%;
          color: #1da1f2;
          background-color: whitesmoke;
        }
      }
    }
  }
}
</style>
