import { PrismaClient } from "@prisma/client"
import { hash } from "bcryptjs"
const prisma = new PrismaClient()

async function main() {
  await prisma.trip.upsert({
    where: { title: "Long Trail Backpacking Trip" },
    update: {},
    create: {
      title: "Long Trail Backpacking Trip",
      date: "2024-07-05T00:00:00.000Z",
      price: 35.5,
      description:
        "Enjoy a backpacking weekend among one of the more remote areas of the Green Mountains! We'll be camping and hanging out on Friday and Saturday evenings. During the day on Saturday and Sunday, we'll be backpacking along the Long Trail at rougly 15 miles per day.",
    },
  })

  await prisma.trip.upsert({
    where: { title: "Zealand-Bonds Traverse" },
    update: {},
    create: {
      title: "Zealand-Bonds Traverse",
      date: "2024-08-03T00:00:00.000Z",
      price: 0,
      description:
        "Join us as we backpack the classic Zealand-Bonds traverse, an overnight trek that will take us through one of the most remote section of the White Mountains! On Saturday, we'll summit Mt Zealand and continue to Camp Guyot where we'll be staying the night. On Sunday, we'll summit Mt Bond and Bondcliff and then make our way to the trail's end.",
    },
  })

  await prisma.trip.upsert({
    where: { title: "Greenleaf Hut Adventure" },
    update: {},
    create: {
      title: "Greenleaf Hut Adventure",
      date: "2024-08-24T00:00:00.000Z",
      price: 205,
      description:
        "Ever wanted to stay at one of AMC's mountainside huts? Join us as we hike the Pemigewasset wilderness for the weekend with the bonus of staying at Greenleaf hut! We'll summit Garfield and Lafayette on Saturday and do a partial Franconia ridge loop on Sunday.",
    },
  })

  await prisma.trip.upsert({
    where: { title: "Cape Cod Weekend Biking Trip" },
    update: {},
    create: {
      title: "Cape Cod Weekend Biking Trip",
      date: "2024-09-13T00:00:00.000Z",
      price: 40,
      description:
        "Want to bike Cape Cod's Rail Trail during the tail end of this summer? Come with us for the weekend as we hop on our bikes and explore the beautiful beaches, lakes and ice cream shops of Cape Cod! On Friday and Saturday nights, we'll be staying at Nickerson State Park where we can enjoy good company around the campfire.",
    },
  })

  const password = await hash("password123", 12)
  await prisma.user.upsert({
    where: { email: "admin@admin.com" },
    update: {},
    create: {
      email: "admin@admin.com",
      name: "Admin",
      password,
    },
  })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
