import { Box } from "@chakra-ui/layout"
import Sidebar from "./sidebar"

const PlayerLayout = ({ children }) => {
  return (
    <Box as="main" w="100vw" h="100vh" bg="gray.200">
      <Box
        as="aside"
        position="absolute"
        top="0"
        bottom="0"
        left="0"
        width="250px"
        zIndex="1"
      >
        <Sidebar />
      </Box>
      <Box marginLeft="250px" marginBottom="100px">
        {children}
      </Box>
      <Box
        position="absolute"
        as="div"
        left="0"
        zIndex="2"
        bottom="0"
        w="100vw"
        h="100px"
        bg="gray.500"
      >
        bottom
      </Box>
    </Box>
  )
}

export default PlayerLayout
