import { Box } from "@chakra-ui/layout"
import Sidebar from "./sidebar"

const PlayerLayout = ({ children }) => {
  const playerHeight = "100px"
  const sidebarWidth = "250px"
  return (
    <Box w="100vw" h="100vh" bg="gray.200">
      <Box
        as="aside"
        position="absolute"
        top="0"
        bottom="0"
        left="0"
        width={sidebarWidth}
        zIndex="1"
      >
        <Sidebar />
      </Box>
      <Box marginLeft={sidebarWidth} marginBottom={playerHeight}>
        <Box h={`calc(100vh - ${playerHeight})`}>{children}</Box>
      </Box>
      <Box
        position="absolute"
        as="div"
        left="0"
        zIndex="2"
        bottom="0"
        w="100vw"
        h={playerHeight}
        bg="gray.500"
      >
        bottom
      </Box>
    </Box>
  )
}

export default PlayerLayout
