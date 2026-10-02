import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
type ForestArea = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
};

type ForestMapProps = {
  forestAreas: ForestArea[];
};
function ForestMap({ forestAreas }: ForestMapProps) {
  return (
    <div>

      <h2>Karta</h2>

      <MapContainer
        center={[56.6634, 16.3568]}
        zoom={11}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {forestAreas
          .filter((area) => area.latitude !== 0 && area.longitude !== 0)
          .map((area) => (
            <Marker
              key={area.id}
              position={[area.latitude, area.longitude]}
            >
              <Popup>{area.name}</Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
}

export default ForestMap;