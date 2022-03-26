import { Link as ChLink } from "@chakra-ui/react"
import NLink from "next/link"
import LinkProps from "types/LinkProps"

export const Link = ({ children, href, ...rest }: LinkProps) => {
  return (
    <NLink href={href || ""} passHref>
      {/* @ts-ignore */}
      <ChLink {...rest}>{children}</ChLink>
    </NLink>
  )
}