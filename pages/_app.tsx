import "../styles/globals.css"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import "reset-css"
import PlayerLayout from "../components/playerLayout"

const theme = extendTheme({
  colors: {
    gray: {
      200: "#F7FAFC",
      300: "#EDF2F7",
      400: "#E2E8F0",
      500: "#CBD5E0",
      600: "#A0AEC0",
      700: "#718096",
      800: "#4A5568",
      900: "#2D3748",
    },
  },
  components: {
    Button: {
      variants: {
        link: {
          ":focus": {
            boxShadow: "none",
          },
        },
      },
    },
  },
})

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      {Component.authPage ? (
        <Component {...pageProps} />
      ) : (
        <PlayerLayout>
          <Component {...pageProps} />
        </PlayerLayout>
      )}
    </ChakraProvider>
  )
}

export default MyApp
