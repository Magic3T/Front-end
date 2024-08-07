import {
  type ChakraProps,
  defineStyle,
  defineStyleConfig,
} from '@chakra-ui/react'

const baseStyle = defineStyle<ChakraProps>({
  bgColor: 'white',
  borderRadius: '10px',
  p: '10px',
  boxShadow: '0 0 5px 0 #00000030',
  color: 'black',
})

export const tooltipTheme = defineStyleConfig({
  baseStyle,
})
