import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer } from "react-leaflet";

export default function Map() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer
        center={[20.5937, 78.9629]} // Center of India
        zoom={5}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
      </MapContainer>
    </div>
  );
}
