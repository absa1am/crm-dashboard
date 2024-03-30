export default function DashboardCard({ title, subTitle, color = "primary" }) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className={`card-title text-${color}`}>{title}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{subTitle}</h6>
            </div>
        </div>
    );
}