import * as React from "react";

// Import necessary components for React Google Maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

// Import custom styles to customize the style of Google Map
const styles = require("./GoogleMapStyles.json");

const GoogleMapComponentWithMarker = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{
        lat: 22.33185267525871, // latitude for the center of the map
        lng: 73.1434086974762, // longitude for the center of the map
      }}
      defaultOptions={{
        disableDefaultUI: true, // disable default map UI
        draggable: true, // make map draggable
        keyboardShortcuts: false, // disable keyboard shortcuts
        scaleControl: true, // allow scale controle
        scrollwheel: true, // allow scroll wheel
        styles: styles, // change default map styles
      }}
    >
      <Marker
        icon={{
          anchor: new google.maps.Point(17, 46),

          scaledSize: new google.maps.Size(37, 37),
        }}
        position={{
          lat: 22.33185267525871, // latitude for the center of the map
          lng: 73.1434086974762, // longitude for the center of the map
        }}
      />
    </GoogleMap>
  ))
);

export default GoogleMapComponentWithMarker;