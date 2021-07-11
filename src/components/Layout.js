import { Flex, Box } from "@chakra-ui/react"

const Layout = ({ children }) => {
  return (
    <Flex direction="column" minH="100vh" w="100%">
      <Box flex={1}>{children}</Box>
    </Flex>
  )
}

export default Layout
