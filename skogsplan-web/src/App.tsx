import { useEffect, useState } from "react";
import { API_BASE_URL } from "./api";
import ForestAreaForm from "./ForestAreaForm";

type ForestArea = {
  id: number;
  name: string;
  areaHectares: number;
  treeSpecies: string;
  plantingYear: number;
};

function App() {
  const [forestAreas, setForestAreas] = useState<ForestArea[]>([]);
  const fetchForestAreas = () => {
  fetch(`${API_BASE_URL}/ForestAreas`)
    .then((response) => response.json())
    .then((data) => setForestAreas(data))
    .catch((error) => console.error("Error:", error));
};

  useEffect(() => {
  fetchForestAreas();
}, []);

  return (
    <div>
      <h1>SkogsPlan</h1>
      <h2>Skogsområden</h2>
      <ForestAreaForm onAreaCreated={fetchForestAreas} />
      {forestAreas.map((area) => (
        <div key={area.id}>
          <h3>{area.name}</h3>
          <p>Areal: {area.areaHectares} hektar</p>
          <p>Trädslag: {area.treeSpecies}</p>
          <p>Planteringsår: {area.plantingYear}</p>
        </div>
      ))}
    </div>
  );
}

export default App;