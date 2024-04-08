import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

const EmbeddedMap = () => {
    const mapTilerApiKey = '1wEo7YqUxfzldfC7IfEK';

  return (
    <MapContainer
      center={[22.7067, 90.3754]}
      zoom={40}
      style={{ height: "400px", width: "400px" }}
      className="h-96 w-96 border border-pink-400"
    >
      <TileLayer
        url={`https://api.maptiler.com/maps/topo/{z}/{x}/{y}.png?key=${mapTilerApiKey}`}
      />
      <Marker position={[22.7067, 90.3754]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default EmbeddedMap;
