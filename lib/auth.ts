import jwt from "jsonwebtoken"
import prisma from "@/lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"
import { User } from "@/types"

export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies.spotify_clone_token

    if (token) {
      let user: User

      try {
        const { id } = jwt.verify(token, process.env.JWT_SECRET!) as {
          id: number
        }
        user = await prisma.user.findUnique({
          where: { id },
        })

        if (!user) {
          throw new Error("Not real user")
        }
      } catch (error) {
        res.status(401)
        res.json({ error: "Not Authorizied" })
        return
      }

      return handler(req, res, user)
    }

    res.status(401)
    res.json({ error: "Not Authorizied" })
  }
}
