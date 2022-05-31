<template>
  <l-map
    class="map"
    :zoom="zoom"
    :options="{ attributionControl: true }"
    :center="center"
    ref="map"
  >
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <l-control position="bottomleft">
      <div class="control">
        <button @click="reCenter">Recenter</button>
        <div class="check-box">
          <input
            v-model="showZones"
            type="checkbox"
            id="showZones"
            name="showZones"
            checked
          />
          <label for="showZones">Zones</label>
        </div>
        <div class="check-box">
          <input
            v-model="showMarkers"
            type="checkbox"
            id="showMarkers"
            name="showMarkers"
            checked
          />
          <label for="showMarkers">Markers</label>
        </div>
      </div>
    </l-control>
    <v-marker-cluster v-if="showMarkers">
      <l-marker
        v-for="(marker, index) in markers"
        :key="index"
        :lat-lng="marker.position"
      >
        <l-popup>
          <div class="popup-title">{{ marker.title }}</div>
          <div class="popup-content">{{ marker.content }}</div>
          <div v-if="marker.image" class="popup-image">
            <img :src="marker.image" alt="" />
          </div>
          <div class="popup-credit">
            <a :href="marker.uri" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-twitter">{{ marker.user }}</i>
            </a>
          </div>
        </l-popup>
      </l-marker>
    </v-marker-cluster>

    <div v-if="showZones">
      <l-polygon
        v-for="(polygon, index) in zones"
        :key="index"
        :lat-lngs="polygon.positions"
        :color="polygon.color"
      >
        <l-popup>
          <div class="popup-title">{{ polygon.title }}</div>
          <div class="popup-content">{{ polygon.content }}</div>
          <div v-if="polygon.credit" class="popup-credit">
            <a :href="marker.uri" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-twitter">{{ marker.user }}</i>
            </a>
          </div>
        </l-popup>
      </l-polygon>
    </div>
  </l-map>
</template>

<script>
import L from "leaflet";
import {
  LControl,
  LMap,
  LMarker,
  LPolygon,
  LPopup,
  LTileLayer,
} from "vue2-leaflet";
import Vue2LeafletMarkerCluster from "vue2-leaflet-markercluster";
export default {
  components: {
    LMap,
    LTileLayer,
    // eslint-disable-next-line vue/no-unused-components
    LMarker,
    LPopup,
    LPolygon,
    LControl,
    "v-marker-cluster": Vue2LeafletMarkerCluster,
  },
  data() {
    return {
      showMarkers: true,
      showZones: true,
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="https://github.com/kinshukdua/LiveActionMap">Live Action Map</a> contributors | &copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 7,
      center: [49.038230248475905, 31.450182690663947],
      markers: [
        {
          position: [49.038230248475905, 31.450182690663947],
          title: "Twit Title",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida et nisl blandit porta. Quisque eget posuere ex. Fusce faucibus interdum consectetur. Phasellus justo mauris, consequat quis justo vel, lacinia sodales sem. Sed porta ante at magna porta, sit amet blandit mauris sollicitudin. In sit amet nunc egestas, lobortis odio luctus, euismod risus. Sed a molestie nibh, in ultricies diam. Suspendisse condimentum dolor vitae est pellentesque volutpat. Proin et porta tellus. Proin tincidunt magna et justo auctor aliquam. Quisque feugiat lobortis risus, quis suscipit urna egestas quis. Sed ullamcorper euismod libero, sed auctor ex laoreet vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In hac habitasse platea dictumst. Mauris fringilla tortor orci, eget rutrum sem auctor feugiat.",
          user: "Twitter User",
          uri: "https://twitter/postUrl",
          image:
            "https://st2.depositphotos.com/3935719/7215/i/600/depositphotos_72151035-stock-photo-nuclear-explosion.jpg",
        },
        {
          position: [48.038230248475905, 31.450182690663947],
          title: "Twit Title",
          content: "Twit Text",
          user: "Twitter User",
          uri: "https://twitter/postUrl",
        },
      ],
      zones: [
        {
          positions: [
            [50.36429316995319, 30.228621662109],
            [50.51303377189189, 30.28741424805162],
            [50.60122461757218, 30.787151228563896],
            [50.44548234821721, 30.77081995469095],
          ],
          color: "green",
          title: "Safe Zone",
          content: "Some safe zone over here",
        },
      ],
    };
  },
  methods: {
    reCenter() {
      this.map = this.$refs.map.mapObject;
      this.map.panTo(new L.LatLng(49.038230248475905, 31.450182690663947));
    },
  },
};
</script>

<style>
@import "~leaflet.markercluster/dist/MarkerCluster.css";
@import "~leaflet.markercluster/dist/MarkerCluster.Default.css";
</style>
