import { useEffect, useState } from "react";
import { API_BASE_URL } from "./api";
import ForestAreaForm from "./ForestAreaForm";
import EditForestAreaForm from "./EditForestAreaForm";
import "./App.css";
import ForestActivityForm from "./ForestActivityForm";
type ForestActivity = {
  id: number;
  type: string;
  plannedDate: string;
  status: string;
  notes: string | null;
  forestAreaId: number;
};
type ForestArea = {
  id: number;
  name: string;
  areaHectares: number;
  treeSpecies: string;
  plantingYear: number;
  activities: ForestActivity[];
};

function App() {
  const [forestAreas, setForestAreas] = useState<ForestArea[]>([]);
   const [editingArea, setEditingArea] = useState<ForestArea | null>(null);
  const fetchForestAreas = () => {
  fetch(`${API_BASE_URL}/ForestAreas`)
    .then((response) => response.json())
    .then((data) => setForestAreas(data))
    .catch((error) => console.error("Error:", error));
};

const deleteForestArea = async (id: number) => {
  const response = await fetch(`${API_BASE_URL}/ForestAreas/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    fetchForestAreas();
  }
};

  useEffect(() => {
  fetchForestAreas();
}, []);

  return (
    <div className="app">
  <div className="header">
    <h1>SkogsPlan</h1>
    <p>Planera och hantera dina skogsområden</p>
  </div>

  <h2 className="section-title">Skogsområden</h2>
      <ForestAreaForm onAreaCreated={fetchForestAreas} />
      {editingArea && (
  <EditForestAreaForm
    area={editingArea}
    onAreaUpdated={() => {
      setEditingArea(null);
      fetchForestAreas();
    }}
    onCancel={() => setEditingArea(null)}
  />
)}
      <div className="forest-grid">
  {forestAreas.map((area) => (
    <div key={area.id} className="forest-card">
      <h3>{area.name}</h3>
      <p>Area: {area.areaHectares} hektar</p>
      <p>Trädslag: {area.treeSpecies}</p>
      <p>Planteringsår: {area.plantingYear}</p>
      {area.activities.length > 0 && (
  <div className="activity-list">
    <h4>Planerade aktiviteter</h4>

    {area.activities.map((activity) => (
      <div key={activity.id} className="activity-item">
        <strong>{activity.type}</strong>
        <p>Status: {activity.status}</p>
        <p>Datum: {new Date(activity.plannedDate).toLocaleDateString("sv-SE")}</p>
        {activity.notes && <p>{activity.notes}</p>}
      </div>
    ))}
  </div>
)}
      <ForestActivityForm
  forestAreaId={area.id}
  onActivityCreated={fetchForestAreas}
/>

      <div className="actions">
        <button
          className="edit-button"
          onClick={() => setEditingArea(area)}
        >
          Redigera
        </button>

        <button
          className="delete-button"
          onClick={() => deleteForestArea(area.id)}
        >
          Ta bort
        </button>
      </div>
    </div>
  ))}
</div>

</div>
);
}

export default App;