import fetcher from "./fetcher"

export const auth = async (
  mode: "login" | "signup",
  body: {
    email: string
    password: string
  }
) => {
  return fetcher(`/${mode}`, body)
}
