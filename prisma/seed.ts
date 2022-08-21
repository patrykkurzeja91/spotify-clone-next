import bcrypt from "bcrypt"
import { PrismaClient } from "@prisma/client"
import { artistsData } from "./songsData"

const prisma = new PrismaClient()

const run = async () => {
  await Promise.all(
    artistsData.map(async ({ name, songs }) => {
      return prisma.artist.upsert({
        where: { name },
        update: {},
        create: {
          name,
          songs: {
            create: songs.map((song) => ({
              title: song.title,
              duration: song.duration,
              url: song.url,
            })),
          },
        },
      })
    })
  )

  const salt = bcrypt.genSaltSync(10)
  const password = bcrypt.hashSync("password", salt)

  const user = await prisma.user.upsert({
    where: { email: "user@test.com" },
    update: {},
    create: {
      email: "user@test.com",
      password,
    },
  })

  const songs = await prisma.song.findMany({})
  await Promise.all(
    new Array(10).fill(0).map(async (_, i) => {
      await prisma.playlist.create({
        data: {
          name: `Playlist ${i + 1}`,
          songs: {
            connect: songs.map((song) => ({ id: song.id })),
          },
          user: {
            connect: { id: user.id },
          },
        },
      })
    })
  )
}

run()
  .then()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
