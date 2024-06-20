import prisma from "@/lib/prisma"
import Image from "next/image"

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id
  const trip = await prisma.trip.findUnique({
    where: {
      id,
    },
    include: {
      photo: true, // All posts where authorId == 20
    },
  })

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>{trip?.title}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div>{trip?.date.toDateString()}</div>
          <div style={{ color: "#198754" }}>
            {Number(trip?.price) > 0 ? `$${trip?.price.toFixed(2)}` : "Free"}
          </div>
          <div>{trip?.description}</div>
        </div>
        <div className="col">
          <Image
            src={`/photos/${trip?.photo?.filename}`}
            width={trip?.photo?.width}
            height={trip?.photo.height}
            alt="Trip photo"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </div>
  )
}
