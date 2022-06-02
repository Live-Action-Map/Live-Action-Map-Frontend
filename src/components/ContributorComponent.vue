<template>
  <div class="contributor">
    <div class="image">
      <img :src="contributor.image" alt="" />
    </div>
    <div class="body">
      <div class="name">{{ contributor.name }}</div>
      <div class="roles">
        <span
          class="role"
          v-for="(role, index) in contributor.roles"
          :key="index"
          >{{ role }}</span
        >
      </div>
      <div class="description">{{ contributor.description }}</div>
      <div class="socials">
        <a
          v-for="(social, index) in contributor.socials"
          :key="index"
          :style="`color: ${social.color}`"
          class="social"
          :href="social.link"
          target="_blank"
          ><i :class="social.icon"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contributor: Object,
  },
};
</script>

<style lang="scss" scoped>
.contributor {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  .image {
    background-color: purple;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    outline: 10px whitesmoke solid;
    z-index: 2;
    img {
      height: 150px;
      background-color: white;
      border-radius: 50%;
      margin: 5px;
    }
  }
  .body {
    background-color: #90dfaa;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 0;
    position: relative;
    top: -20px;
    border-radius: 15px;
    padding: 10px;
    text-align: center;
    .name {
      padding-top: 25px;
      font-size: 25px;
    }
  }
}

.socials {
  font-size: 25px;
}

.social:hover {
  text-shadow: 2px 2px 2px rgb(121, 121, 121);
}

.roles,
.socials {
  display: flex;
  gap: 5px;
}
</style>
