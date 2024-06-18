import { Trip } from "@prisma/client"
import Link from "next/link"

type EventCardProps = Trip

export default function EventCard({ trip }: { trip: EventCardProps }) {
  return (
    <div className="card" style={{ width: "48rem" }}>
      <div className="card-body">
        <h5 className="card-title">{trip.title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          {trip.date.toDateString()}
        </h6>
        <h6 className="card-subtitle mb-2" style={{ color: "#198754" }}>
          {Number(trip.price) > 0 ? `$${trip.price.toFixed(2)}` : "Free"}
        </h6>
        <p className="card-text text-truncate">{trip.description}</p>
        <Link href={`/calendar/${trip.id}`} className="btn btn-primary">
          Details
        </Link>
      </div>
    </div>
  )
}
