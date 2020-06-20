/* global google */
const initialHeatLocations = [
  new google.maps.LatLng(49.2589731, -123.0389234),
  new google.maps.LatLng(49.2689731, -123.0389234),
  new google.maps.LatLng(49.2589731, -123.2389234),
  new google.maps.LatLng(49.2644731, -123.0489234),
  { location: new google.maps.LatLng(49.2589731, -123.0389234), weight: 3 },
  { location: new google.maps.LatLng(49.2287354, -123.0149815), weight: 10 },
];

export default initialHeatLocations;
