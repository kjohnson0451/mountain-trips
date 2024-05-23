import EventCard from "@/app/ui/calendar/event-card"
import { fetchTrips } from "@/lib/data"

export default async function Calendar() {
  const trips = await fetchTrips()
  return (
    <main>
      <div className="container">
        <h1 className="mb-4">Calendar</h1>
        {trips.map((trip) => (
          <div key={trip.id} className="card mb-2" style={{ width: "48rem" }}>
            <EventCard trip={trip} />
          </div>
        ))}
      </div>
    </main>
  )
}
