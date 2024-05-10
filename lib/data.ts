import prisma from "@/lib/prisma"

export async function fetchTrips() {
  const trips = await prisma.trip.findMany()
  return trips
}
