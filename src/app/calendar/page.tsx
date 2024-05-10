import EventCard from "@/app/ui/calendar/event-card"
import { fetchTrips } from "@/lib/data"

export default function Calendar() {
  return (
    <main>
      <div className="container">
        <h1 className="mb-4">Calendar</h1>
        <div className="card" style={{ width: "48rem" }}>
          <EventCard
            title="Northern Long Trail Backpacking Trip"
            date="Jul 5 - Jul 7 2024"
            price={35.5}
            description="Enjoy a backpacking weekend among one of the more remote areas of
            the Green Mountains! We'll be camping and hanging out on
            Friday and Saturday evenings. During the day on Saturday and
            Sunday, we'll be backpacking along the Long Trail at rougly
            15 miles per day."
          />
        </div>
      </div>
    </main>
  )
}
