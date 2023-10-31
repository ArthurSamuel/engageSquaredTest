import * as React from "react";
import * as L from "leaflet";
import "./Map.module.scss";

interface IMap {
  id: string;
  lat: number;
  lng: number;
}

export default function Map({ id, lat, lng }: IMap) {
  const ref = React.useRef<any>();
  const refMarker = React.useRef<any | null>(null);
  const refMap = React.useRef<any>();

  React.useEffect(() => {
    if (ref.current && refMarker.current === null) {
      const myIcon = L.icon({
        iconUrl: require("../../../assets/location-pin.png"),
      });
      refMap.current = L.map(`map${id}`).setView([lat, lng], 15);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
      }).addTo(refMap.current);
      refMarker.current = L.marker([lat, lng], { icon: myIcon }).addTo(
        refMap.current
      );
    }
  }, [ref]);

  React.useEffect(() => {
    if (refMarker.current) {
      refMap.current.setView([lat, lng]);
      refMarker.current.setLatLng([lat, lng]);
      refMarker.current.update();
    }
  }, [lat, lng]);

  return (
    <div ref={ref} id={`map${id}`} style={{ height: "100%", width: "100%" }} />
  );
}
