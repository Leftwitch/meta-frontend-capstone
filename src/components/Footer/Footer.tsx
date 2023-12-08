import { Box, HStack, Heading, Image } from "@chakra-ui/react"
import logo from '../../assets/littlelemon_logo.png'
export const Footer = () => {
    return <Box px={10} bg="secondary" h='10vh' w='100%'>
        <HStack
            h='100%'
            justify='space-between'
            align='center'
        >
            <Image src={logo} alt="Little Lemonemon logo" height='64px' />
            <Heading color='white' size='md'>Copyright {new Date().getFullYear()} Little Lemon</Heading>
        </HStack>
    </Box>
}