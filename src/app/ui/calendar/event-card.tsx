import { Trip } from "@prisma/client"

type EventCardProps = Trip

export default function EventCard({ trip }: { trip: EventCardProps }) {
  return (
    <div className="card" style={{ width: "48rem" }}>
      <div className="card-body">
        <h5 className="card-title">{trip.title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{"What"}</h6>
        <h6 className="card-subtitle mb-2" style={{ color: "#198754" }}>
          ${trip.price.toFixed(2)}
        </h6>
        <p className="card-text text-truncate">{trip.description}</p>
        <a href="#" className="btn btn-primary">
          Details
        </a>
      </div>
    </div>
  )
}
