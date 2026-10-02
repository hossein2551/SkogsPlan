import { useState } from "react";
import { API_BASE_URL } from "./api";

type ForestActivity = {
  id: number;
  type: string;
  plannedDate: string;
  status: string;
  notes: string | null;
  forestAreaId: number;
};

type EditForestActivityFormProps = {
  activity: ForestActivity;
  onActivityUpdated: () => void;
  onCancel: () => void;
};

function EditForestActivityForm({
  activity,
  onActivityUpdated,
  onCancel,
}: EditForestActivityFormProps) {
  const [type, setType] = useState(activity.type);
  const [plannedDate, setPlannedDate] = useState(
    activity.plannedDate.substring(0, 10)
  );
  const [status, setStatus] = useState(activity.status);
  const [notes, setNotes] = useState(activity.notes ?? "");
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const updatedActivity = {
    type,
    plannedDate,
    status,
    notes,
    forestAreaId: activity.forestAreaId,
  };

  const response = await fetch(
    `${API_BASE_URL}/ForestActivities/${activity.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedActivity),
    }
  );

  if (response.ok) {
    onActivityUpdated();
  }
};

return (
  <form onSubmit={handleSubmit} className="activity-form">
    <h4>Redigera aktivitet</h4>

    <input
      type="text"
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

    <select
      value={status}
      onChange={(e) => setStatus(e.target.value)}
    >
      <option value="Planned">Planerad</option>
      <option value="In Progress">Pågående</option>
      <option value="Completed">Klar</option>
    </select>

    <input
      type="text"
      value={notes}
      onChange={(e) => setNotes(e.target.value)}
      placeholder="Anteckningar"
    />

    <button type="submit">Spara ändringar</button>
    <button type="button" onClick={onCancel}>
      Avbryt
    </button>
  </form>
);
}

export default EditForestActivityForm;