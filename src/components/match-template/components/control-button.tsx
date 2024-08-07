import { Center, type CenterProps } from '@chakra-ui/react'

interface Props extends CenterProps {
  disabled?: boolean
}

export function ControlButton({ children, disabled, ...rest }: Props) {
  return (
    <Center
      bg="gray.300"
      rounded="8px"
      p="12px"
      transition="80ms linear all"
      cursor={disabled ? 'normal' : 'pointer'}
      opacity={disabled ? '0.5' : '1'}
      _hover={
        disabled
          ? {}
          : {
              bg: 'gray.200',
            }
      }
      {...rest}
    >
      {children}
    </Center>
  )
}
