import { Box, Heading, Text, VStack } from "@chakra-ui/react"
import { ReservationButton } from "../Reservation/ReservationButton"

export const Hero = () => {
    return <Box bg='secondary' w='100%' h={['40vh']}>
        <VStack
            p={10}
            align='start'
            maxW={['100%', null, null, '40%', '30%']}>

            <Heading color="primary" size="4xl" >Little Lemon</Heading>
            <Heading color="white" mt={-3}>Chicago</Heading>

            <Text color='white' fontSize='2xl' mt={4}>
                We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </Text>

            <Box mt={4} />
            <ReservationButton />
        </VStack>
    </Box>
}