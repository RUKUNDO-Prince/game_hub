import React from 'react'
import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'

const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack justifyContent="space-between" padding="10px">
      <Switch colorScheme='green' isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text>Dark Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch
