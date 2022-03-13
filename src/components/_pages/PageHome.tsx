import { Container, Heading } from "@chakra-ui/react"
import Layout from "@components/Layout"
import React, { VFC } from "react"

const PageHome: VFC = () => {
  return (
    <Layout>
      <Container maxW="container.lg" px={5}>
        <Heading>Hello!</Heading>
      </Container>
    </Layout>
  )
}

export default PageHome
