import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <main className="w-96 overflow-hidden">
        <Map
          google={this.props.google}
          style={{ width: "100%", height: "100%" }}
          onClick={this.onMapClicked}
        >
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </main>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC2bL47N-Ae1WfvQWQUR__wFVebEnfqm6U",
})(MapContainer);

// import GoogleMapReact from "google-map-react";
// import { FaMapMarkerAlt } from "react-icons/fa";

// const AnyReactComponent = ({ text }) => <div className="">Store</div>;

// const Maps = () => {
//   const defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33,
//     },
//     zoom: 11,
//   };
//   return (
//     <div style={{ height: "100vh", width: "100%" }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{
//           key: "AIzaSyC9UaxGKc3n_NxOC7uHhlAnHJPJzecfywA",
//           language: "en",
//         }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//       >
//         <AnyReactComponent lat={59.955413} lng={30.337844} />
//       </GoogleMapReact>
//     </div>
//   );
// };

// export default Maps;

// import { YMaps, Map, Placemark } from "react-yandex-maps";

// const Maps = () => {
//   return (
//     <YMaps query={{ lang: "en_US" }}>
//       <Map
//         width="100%"
//         height="600px"
//         defaultState={{
//           center: [55.834454902043085, 37.446311750000014],
//           zoom: 9,
//           controls: ["zoomControl", "fullscreenControl"],
//         }}
//         modules={["control.ZoomControl", "control.FullscreenControl"]}
//       >
//         <Placemark
//           modules={["geoObject.addon.balloon"]}
//           defaultGeometry={[55.834454902043085, 37.446311750000014]}
//           properties={{
//             balloonContentHeader: "Store 1",
//             balloonContentBody: "Store description and others 1",
//             iconCaption: "Store 1",
//           }}
//         />

//         <Placemark
//           modules={["geoObject.addon.balloon"]}
//           defaultGeometry={[55.73075309292023, 37.57540110546876]}
//           properties={{
//             balloonContentHeader: "Store 2",
//             balloonContentBody: "Store description and others 2",
//             iconCaption: "Store 2",
//           }}
//         />
//       </Map>
//     </YMaps>
//   );
// };

// export default Maps;
