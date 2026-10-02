import { useState } from "react";
import { API_BASE_URL } from "./api";
type ForestAreaFormProps = {
  onAreaCreated: () => void;
};

function ForestAreaForm({ onAreaCreated }: ForestAreaFormProps) {
  const [name, setName] = useState("");
  const [areaHectares, setAreaHectares] = useState("");
  const [treeSpecies, setTreeSpecies] = useState("");
  const [plantingYear, setPlantingYear] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const newForestArea = {
    name,
    areaHectares: Number(areaHectares),
    treeSpecies,
    plantingYear: Number(plantingYear),
    latitude: Number(latitude),
longitude: Number(longitude),
  };
  const response = await fetch(`${API_BASE_URL}/ForestAreas`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newForestArea),
  });
  if (response.ok) {
    onAreaCreated();
    setName("");
    setAreaHectares("");
    setTreeSpecies("");
    setPlantingYear("");
    setLatitude("");
setLongitude("");
    alert("Skogsområdet har lagts till!");
  }
};
  return (
  <div className="form-card">
    <h2>Lägg till skogsområde</h2>

    <form onSubmit={handleSubmit}>
      
      <input
        type="text"
        placeholder="Namn"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Areal (hektar)"
        value={areaHectares}
        onChange={(e) => setAreaHectares(e.target.value)}
      />
      <input
        type="text"
        placeholder="Trädslag"
        value={treeSpecies}
        onChange={(e) => setTreeSpecies(e.target.value)}
      />
     <input
  type="number"
  placeholder="Planteringsår"
  value={plantingYear}
  onChange={(e) => setPlantingYear(e.target.value)}
  required
/>

<input
  type="number"
  step="any"
  placeholder="Latitud"
  value={latitude}
  onChange={(e) => setLatitude(e.target.value)}
  required
/>
<input
  type="number"
  step="any"
  placeholder="Longitud"
  value={longitude}
  onChange={(e) => setLongitude(e.target.value)}
  required
/>
      <button type="submit" className="primary-button">
  Lägg till
</button>
    </form>
    </div>
  );
}
export default ForestAreaForm;