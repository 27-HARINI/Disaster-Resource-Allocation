import "../styles/dashboardCard.css";

function DashboardCard({ title, value, icon, color }) {
  return (
    <div className="dashboard-card">

      <div
        className="icon-box"
        style={{ background: color }}
      >
        {icon}
      </div>

      <div>

        <h2>{value}</h2>

        <p>{title}</p>

      </div>

    </div>
  );
}

export default DashboardCard;