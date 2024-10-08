import { Box, Center } from '@chakra-ui/react'

interface Props {
  choice: number
}

export function Choice({ choice }: Props) {
  return (
    <Box
      as="span"
      display="inline-block"
      textIndent="0"
      position="relative"
      w="28px"
      h="28px"
      bg="blue.200"
      borderRadius="5px"
    >
      <Center as="span" w="100%" h="100%" fontSize="16px">
        {choice}
      </Center>
    </Box>
  )
}
