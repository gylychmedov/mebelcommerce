import { YMaps, Map, Placemark } from "react-yandex-maps";

const Maps = () => {
  return (
    <YMaps>
      <Map
        width="100%"
        height="600px"
        defaultState={{
          center: [55.834454902043085, 37.446311750000014],
          zoom: 9,
          controls: ["zoomControl", "fullscreenControl"],
        }}
        modules={["control.ZoomControl", "control.FullscreenControl"]}
      >
        <Placemark
          modules={["geoObject.addon.balloon"]}
          defaultGeometry={[55.834454902043085, 37.446311750000014]}
          properties={{
            balloonContentHeader: "Store 1",
            balloonContentBody: "Store description and others 1",
            iconCaption: "Store 1",
          }}
        />

        <Placemark
          modules={["geoObject.addon.balloon"]}
          defaultGeometry={[55.73075309292023, 37.57540110546876]}
          properties={{
            balloonContentHeader: "Store 2",
            balloonContentBody: "Store description and others 2",
            iconCaption: "Store 2",
          }}
        />
      </Map>
    </YMaps>
  );
};

export default Maps;
