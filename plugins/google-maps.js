import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyAIso8r5cdTPqMISeYnTx2fanNMZ9NWc7M",
        libraries: "places"
    }
});