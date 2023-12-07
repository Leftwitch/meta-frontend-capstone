import { HamburgerIcon } from "@chakra-ui/icons"
import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, IconButton, StackDivider, Text, VStack, useDisclosure } from "@chakra-ui/react"
import { ReactNode, useEffect, useRef } from "react"

export const MobileMenu = ({ children }: { children: ReactNode }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef<HTMLButtonElement>(null)

    // Close drawer when viewport changes
    useEffect(() => {
        window.addEventListener('resize', onClose)
        return () => window.removeEventListener('resize', onClose)
    }, [onClose])

    return <Box display={['block', null, null, 'none']}>
        <IconButton
            ref={btnRef}
            aria-label='Open Menu'
            icon={<HamburgerIcon />}
            onClick={onOpen}
        />
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader textAlign='center'>Menu</DrawerHeader>

                <DrawerBody>
                    <VStack
                        divider={<StackDivider borderColor='gray.200' />}
                        spacing={4}
                        align='stretch'
                        justify='center'
                        h='100%'
                    >
                        {children}
                    </VStack>

                </DrawerBody>

                <DrawerFooter>
                    <Text>© LittleLemon {new Date().getFullYear()}</Text>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    </Box>
    return

}