import { HStack } from "@chakra-ui/react"
import { ReactNode } from "react"

export const Menu = ({ children }: { children: ReactNode }) => {
    return (
        <HStack
            display={['none', null, null, 'flex']}
            spacing={4}
            align='center'
            justify='flex-end'
            h='100%'
            w='100%'
        >
            {children}
        </HStack>)
}