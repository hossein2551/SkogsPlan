type ForestActivity = {
  id: number;
  status: string;
};

type ForestArea = {
  id: number;
  areaHectares: number;
  activities: ForestActivity[];
};

type DashboardProps = {
  forestAreas: ForestArea[];
};

function Dashboard({ forestAreas }: DashboardProps) { 
  const totalArea = forestAreas.reduce(
    
  (sum, area) => sum + area.areaHectares,
  0
);
const plannedActivities = forestAreas.reduce(
  (sum, area) =>
    sum + area.activities.filter((activity) => activity.status === "Planned").length,
  0
);
  return (
      <div className="dashboard">
      <h2>Översikt</h2>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Skogsområden</h3>
          <p>{forestAreas.length}</p>
        </div>

        <div className="dashboard-card">
          <h3>Total areal</h3>
          <p>{totalArea.toFixed(1)} ha</p>
        </div>

        <div className="dashboard-card">
          <h3>Planerade aktiviteter</h3>
          <p>{plannedActivities}</p>
        </div>
      </div>
    </div>
  );
}



export default Dashboard;