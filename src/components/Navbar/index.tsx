import { Container, ContainerProps, Flex, Heading } from "@chakra-ui/react"
import { Link } from "components/Link"
import { useState, VFC } from "react"
import { MobileToggle } from "./MobileToggle"
import { NavLinks } from "./NavLinks"

export const Navbar: VFC<ContainerProps> = props => {
  const [isOpen, setOpen] = useState(false)
  return (
    <Container maxW="container.lg" px={5} py={3} {...props}>
      <Flex justify="space-between">
        <Link href="/">
          <Heading size="md">Logo</Heading>
        </Link>
        <NavLinks isOpen={isOpen} />
        <MobileToggle isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
      </Flex>
    </Container>
  )
}
