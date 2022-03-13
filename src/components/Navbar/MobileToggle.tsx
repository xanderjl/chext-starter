import { Box, BoxProps } from "@chakra-ui/react"
import { VFC } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { MdClose } from "react-icons/md"

interface MobileToggleProps extends BoxProps {
  isOpen?: boolean
  onClick?: () => void
}

const MobileToggle: VFC<MobileToggleProps> = ({ isOpen, onClick }) => {
  return (
    <Box
      as={isOpen ? AiOutlineMenu : MdClose}
      display={{ base: "block", md: "none" }}
      boxSize={6}
      onClick={onClick}
    />
  )
}

export default MobileToggle
