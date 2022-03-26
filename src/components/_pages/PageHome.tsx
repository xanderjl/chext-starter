import { Container, Heading } from "@chakra-ui/react"
import Layout from "components/Layout"
import { VFC } from "react"

export const PageHome: VFC = () => {
  return (
    <Layout>
      <Container maxW="container.lg" px={5}>
        <Heading>Hello!</Heading>
      </Container>
    </Layout>
  )
}
