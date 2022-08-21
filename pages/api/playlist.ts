import prisma from "@/lib/prisma"
import { validateRoute } from "@/lib/auth"
// import { User } from "@/types"
// import { NextApiRequest, NextApiResponse } from "next"

export default validateRoute(async (req, res, user) => {
  const playlists = await prisma.playlist.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      name: "asc",
    },
  })

  res.json(playlists)
})
