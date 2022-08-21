import { useRouter } from "next/router"
import { useSWRConfig } from "swr"
import { auth } from "@/lib/mutations"
import { FC, FormEvent, useState } from "react"
import { Box, Flex } from "@chakra-ui/layout"
import { Button, Input } from "@chakra-ui/react"
import NextImage from "next/image"

const AuthForm: FC<{ mode: "login" | "signup" }> = ({ mode }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const user = await auth(mode, { email, password })
    setIsLoading(false)
    router.push("/")
  }
  return (
    <Box h="100vh" w="100vw" bg="black" color="white">
      <Flex justify="center" align="center" h="100px">
        <NextImage src="/logo-spotify-clone.svg" height={60} width={120} />
      </Flex>
      <Flex justify="center" align="center" h="calc(100vh - 100px)">
        <Box minW="500px" p="50px" bg="gray.900" borderRadius="8px">
          <form onSubmit={handleSubmit} className="flex">
            <Flex justify="center" align="center" direction="column" w="100%">
              <Input
                w="100%"
                placeholder="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                w="100%"
                marginTop="20px"
                placeholder="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                bg="purple.600"
                sx={{
                  "&:hover": {
                    bg: "purple.500",
                  },
                }}
                marginTop="30px"
                isLoading={isLoading}
              >
                Submit
              </Button>
            </Flex>
          </form>
        </Box>
      </Flex>
    </Box>
  )
}

export default AuthForm
