import { Box, Stack, StackProps } from "@chakra-ui/react"
import { Link } from "components/Link"
import { VFC } from "react"
import routes from "util/routes.json"

export interface NavLinksProps extends StackProps {
  isOpen?: boolean
}

export const NavLinks: VFC<NavLinksProps> = ({ isOpen }) => {
  return (
    <Stack
      as="ul"
      direction={{ base: "column", md: "row" }}
      display={{ base: isOpen ? "flex" : "none", md: "flex" }}
      spacing={4}
    >
      {routes.map((route, i) => {
        const { slug, title, active } = route
        return (
          active && (
            <Box key={i} as="li" listStyleType="none">
              <Link href={slug}>{title}</Link>
            </Box>
          )
        )
      })}
    </Stack>
  )
}
