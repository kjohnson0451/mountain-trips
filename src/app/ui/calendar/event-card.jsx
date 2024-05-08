export default function EventCard({ title, date, price, description }) {
  return (
    <div className="card" style={{ width: "48rem" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{date}</h6>
        <h6 className="card-subtitle mb-2" style={{ color: "#198754" }}>
          {price}
        </h6>
        <p className="card-text text-truncate">{description}</p>
        <a href="#" className="btn btn-primary">
          Details
        </a>
      </div>
    </div>
  )
}
