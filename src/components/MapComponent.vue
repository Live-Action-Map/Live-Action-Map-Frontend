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
        <div class="legendItem" @click="reCenter">
          Recenter <i class="fas fa-bullseye"></i>
        </div>
        |
        <div class="check-box">
          <input
            v-model="showZones"
            type="checkbox"
            id="showZones"
            name="showZones"
            checked
          />
          <label class="legendItem" for="showZones"
            >Show Zones <i class="fas fa-border-none"></i
          ></label>
        </div>
        |
        <div class="check-box">
          <input
            v-model="showMarkers"
            type="checkbox"
            id="showMarkers"
            name="showMarkers"
            checked
          />
          <label class="legendItem" for="showMarkers">
            Show Markers
            <i class="fas fa-map-pin"></i>
          </label>
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
          <div class="popup-content">{{ marker.text }}</div>
          <div v-if="marker.image" class="popup-image">
            <img :src="marker.image" alt="" />
          </div>
          <!-- <div class="popup-credit">
            <a :href="marker.uri" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-twitter">{{ marker.user }}</i>
            </a>
          </div> -->
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
import axios from "axios";
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
        '&copy; <a target="_blank" href="https://github.com/Live-Action-Map">Live Action Map</a> contributors | &copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 6,
      center: [49.038230248475905, 31.450182690663947],
      markers: [],
      zones: [],
    };
  },
  methods: {
    reCenter() {
      this.map = this.$refs.map.mapObject;
      this.map.panTo(new L.LatLng(49.038230248475905, 31.450182690663947));
    },
    updateMapData() {
      let that = this;
      axios.get("/api/markers").then((res) => {
        console.log(res.data[0]);
        that.markers = res.data;
      });
      axios.get("/api/zones").then((res) => {
        console.log(res.data[0]);
        that.zones = res.data;
      });
    },
  },
  mounted() {
    this.updateMapData();
    setInterval(this.updateMapData(), 5000);
  },
};
</script>

<style>
@import "~leaflet.markercluster/dist/MarkerCluster.css";
@import "~leaflet.markercluster/dist/MarkerCluster.Default.css";
</style>
