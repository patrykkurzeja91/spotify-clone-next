import { validateRoute } from "@/lib/auth"
import { User } from "@/types"
import { NextApiRequest, NextApiResponse } from "next"

export default validateRoute(
  (_req: NextApiRequest, res: NextApiResponse, user: User | null) => {
    res.json(user)
  }
)
