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

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const newForestArea = {
    name,
    areaHectares: Number(areaHectares),
    treeSpecies,
    plantingYear: Number(plantingYear),
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
      />
      <button type="submit" className="primary-button">
  Lägg till
</button>
    </form>
    </div>
  );
}
export default ForestAreaForm;