import EventCard from "@/app/ui/calendar/event-card"
import prisma from "@/lib/prisma"

export default async function Calendar() {
  const trips = await prisma.trip.findMany()
  return (
    <main>
      <div className="container">
        <h1 className="mb-4">Calendar</h1>
        {trips.map((trip) => (
          <div key={trip.id} className="card" style={{ width: "48rem" }}>
            <EventCard trip={trip} />
          </div>
        ))}
      </div>
    </main>
  )
}
