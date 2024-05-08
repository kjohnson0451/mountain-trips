export default function Home() {
  return (
    <main>
      <div className="container">
        <h1 className="mb-4">Calendar</h1>
        <div className="card" style={{ width: "48rem" }}>
          <div className="card-body">
            <h5 className="card-title">Northern Long Trail Backpacking Trip</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Jul 5 - Jul 7 2024
            </h6>
            <h6 className="card-subtitle mb-2" style={{ color: "#198754" }}>
              $35.50
            </h6>
            {/* <h6 className="card-subtitle mb-2 text-body-secondary">$35.50</h6> */}
            <p className="card-text">
              Enjoy a backpacking weekend among one of the more remote areas of
              the Green Mountains! We&apos;ll be camping and hanging out on
              Friday and Saturday evenings. During the day on Saturday and
              Sunday, we&apos;ll be backpacking along the Long Trail at rougly
              15 miles per day.
            </p>
            <a href="#" className="btn btn-primary">
              Book now
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
