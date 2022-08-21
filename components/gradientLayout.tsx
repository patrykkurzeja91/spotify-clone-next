import { Box, Flex, Text } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/react"

const GradientLayout = ({
  color,
  image,
  subtitle,
  title,
  description,
  roundImage,
  children,
}) => {
  return (
    <Box
      as="main"
      w="100%"
      h="100%"
      overflowY="auto"
      bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,0.95) 75%)`}
    >
      <Flex bg={`${color}.600`} p="40px" align="end">
        <Box p="20px">
          <Image
            borderRadius={roundImage ? "full" : "8px"}
            boxSize="160px"
            boxShadow="2xl"
            src={image}
            alt="Dan Abramov"
          />
        </Box>
        <Box p="20px">
          <Text
            fontSize="sm"
            fontWeight="bold"
            casing="uppercase"
            color="white"
          >
            {subtitle}
          </Text>
          <Text lineHeight="5rem" as="h3" fontSize="6xl" color="white">
            {title}
          </Text>
          <Text
            fontSize="x-small"
            fontWeight="bold"
            color="white"
            opacity="0.8"
          >
            {description}
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default GradientLayout
