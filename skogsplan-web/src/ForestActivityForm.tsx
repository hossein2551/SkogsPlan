import { useState } from "react";
import { API_BASE_URL } from "./api";

type ForestActivityFormProps = {
  forestAreaId: number;
  onActivityCreated: () => void;
};

function ForestActivityForm({
  forestAreaId,
  onActivityCreated,
}: ForestActivityFormProps) {
  const [type, setType] = useState("");
  const [plannedDate, setPlannedDate] = useState("");
  const [notes, setNotes] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const newActivity = {
    type,
    plannedDate,
    status: "Planned",
    notes,
    forestAreaId,
  };

  const response = await fetch(`${API_BASE_URL}/ForestActivities`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newActivity),
  });

  if (response.ok) {
    setType("");
    setPlannedDate("");
    setNotes("");
    onActivityCreated();
  }
};

  return (
  <form onSubmit={handleSubmit} className="activity-form">
    <h4>Lägg till aktivitet</h4>

    <input
      type="text"
      placeholder="Typ, t.ex. Gallring"
      value={type}
      onChange={(e) => setType(e.target.value)}
      required
    />

    <input
      type="date"
      value={plannedDate}
      onChange={(e) => setPlannedDate(e.target.value)}
      required
    />

    <input
      type="text"
      placeholder="Anteckningar"
      value={notes}
      onChange={(e) => setNotes(e.target.value)}
    />

    <button type="submit">Lägg till aktivitet</button>
  </form>
);
}

export default ForestActivityForm;