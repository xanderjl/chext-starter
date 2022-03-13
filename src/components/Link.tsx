import NLink, { LinkProps } from "next/link"
import { Link as ChLink } from "@chakra-ui/react"
import { FC } from "react"

const Link: FC<LinkProps> = ({ href, children, ...rest }) => {
  return (
    <ChLink as={NLink} href={href} {...rest}>
      {children}
    </ChLink>
  )
}

export default Link
