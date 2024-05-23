import prisma from "@/lib/prisma"

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id
  const trip = await prisma.trip.findUnique({
    where: {
      id,
    },
  })

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>{trip?.title}</h2>
          <div>{trip?.date.toDateString()}</div>
          <div style={{ color: "#198754" }}>
            {trip.price > 0 ? `$${trip.price.toFixed(2)}` : "Free"}
          </div>
          <div>{trip?.description}</div>
        </div>
        <div className="col">hello</div>
      </div>
    </div>
  )
}
