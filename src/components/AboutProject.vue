<template>
  <div>
    <h2 class="text-center">Live Action Map</h2>
    <p class="text-center">
      An attempt to use open source data on Twitter to map areas with active
      conflict. Right now it is used for the Ukraine-Russia conflict, but in the
      future I hope it can be used for all sorts of dangerous situations.
    </p>
    <h3>About the project</h3>
    <p>
      There are many twitter accounts posting live tweets about locations with
      conflicts. However, it is difficult to keep track of the locations
      especially with multiple different sources pointing out different location
      every few minutes. To make sure people can stay safe and take care of
      themselves, I have aggregated all the tweets into a single map that is
      easily accessible. This project is a work in progress. I am working on
      adding more features and improving the map.
    </p>
    <img style="width: 100%" src="/map.png" />
    <spacer />
    <!-- TODO: Fill this out! -->
    <!-- <h3>Technical Implementation:</h3>
    <h4>Backend:</h4>
    <ul>
      <li>
        Backend cde listens to a filtered stream from Twitter looking out for
        events that may contain news about Ukraine
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.text-center {
  text-align: center;
}
spacer {
  border-bottom: solid black 2px;
  content: "";
  width: 80%;
}
</style>
