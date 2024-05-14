type EventCardProps = {
  title: string
  date: string
  price: number
  description: string
}

export default function EventCard({
  title,
  date,
  price,
  description,
}: EventCardProps) {
  const formattedPrice = price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  })
  return (
    <div className="card" style={{ width: "48rem" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{date}</h6>
        <h6 className="card-subtitle mb-2" style={{ color: "#198754" }}>
          {formattedPrice}
        </h6>
        <p className="card-text text-truncate">{description}</p>
        <a href="#" className="btn btn-primary">
          Details
        </a>
      </div>
    </div>
  )
}
