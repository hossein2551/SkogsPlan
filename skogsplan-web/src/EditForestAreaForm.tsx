import { useState } from "react";
import { API_BASE_URL } from "./api";

type ForestArea = {
  id: number;
  name: string;
  areaHectares: number;
  treeSpecies: string;
  plantingYear: number;
  latitude: number;
longitude: number;
};

type EditForestAreaFormProps = {
  area: ForestArea;
  onAreaUpdated: () => void;
  onCancel: () => void;
};

function EditForestAreaForm({
  area,
  onAreaUpdated,
  onCancel,
}: EditForestAreaFormProps) {
  const [name, setName] = useState(area.name);
  const [areaHectares, setAreaHectares] = useState(area.areaHectares);
  const [treeSpecies, setTreeSpecies] = useState(area.treeSpecies);
  const [plantingYear, setPlantingYear] = useState(area.plantingYear);
  const [latitude, setLatitude] = useState(area.latitude);
const [longitude, setLongitude] = useState(area.longitude);
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const updatedArea = {
  name,
  areaHectares: Number(areaHectares),
  treeSpecies,
  plantingYear: Number(plantingYear),
  latitude: Number(latitude),
  longitude: Number(longitude),
};
  const response = await fetch(
    `${API_BASE_URL}/ForestAreas/${area.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedArea),
    }
  );
  if (response.ok) {
    onAreaUpdated();
  }
};
  return (
    <form onSubmit={handleSubmit}> 
      <h3>Redigera {area.name}</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={areaHectares}
        onChange={(e) => setAreaHectares(Number(e.target.value))}
      />
      <input
        type="text"
        value={treeSpecies}
        onChange={(e) => setTreeSpecies(e.target.value)}
      />
      <input
        type="number"
        value={plantingYear}
        onChange={(e) => setPlantingYear(Number(e.target.value))}
        
      />
      <input
  type="number"
  step="any"
  placeholder="Latitud"
  value={latitude}
  onChange={(e) => setLatitude(Number(e.target.value))}
/>
<input
  type="number"
  step="any"
  placeholder="Longitud"
  value={longitude}
  onChange={(e) => setLongitude(Number(e.target.value))}
/>
      <button type="button" onClick={onCancel}>
        Avbryt
      </button>
    <button type="submit">
  Spara
</button>
</form>
  );
}
export default EditForestAreaForm;