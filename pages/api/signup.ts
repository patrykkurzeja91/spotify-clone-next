import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import cookie from "cookie"
import prisma from "@/lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const salt = bcrypt.genSaltSync(10)
  const { email, password } = req.body

  let user: { id: number; email: string; password: string } | null

  try {
    user = await prisma.user.create({
      data: {
        email,
        password: bcrypt.hashSync(password, salt),
      },
    })
  } catch (e) {
    res.status(401)
    res.json({ message: "Email already in use" })
    return
  }

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      time: Date.now(),
    },
    process.env.JWT_SECRET!,
    { expiresIn: "8h" }
  )

  res.setHeader(
    "Set-Cookie",
    cookie.serialize("spotify_clone_token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 8,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    })
  )
  res.json(user)
}
