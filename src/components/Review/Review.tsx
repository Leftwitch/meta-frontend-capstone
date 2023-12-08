import { Avatar, Box, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"

export const Review = () => {
    return <Card maxW='md' as={motion.div} initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <CardHeader>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                <Avatar name='Segun Adebayo' src='https://i.pravatar.cc/300' />
                <Box>
                    <Heading size='sm'>John Doe</Heading>
                    <Text>Ordered Online</Text>
                </Box>
            </Flex>
        </CardHeader>

        <CardBody>
            <Text>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae expedita deleniti voluptatibus quis. Culpa tempora neque temporibus quibusdam aut nemo! Dolore molestias a qui doloribus hic voluptatum reiciendis nesciunt possimus?"</Text>
        </CardBody>
        <CardFooter
            justify='center'
            flexWrap='wrap'
        >
            <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 0L16.5309 9.32827H26.3393L18.4042 15.0935L21.4351 24.4217L13.5 18.6565L5.5649 24.4217L8.59584 15.0935L0.660737 9.32827H10.4691L13.5 0Z" fill="#FFB800" />
            </svg>
            <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 0L16.5309 9.32827H26.3393L18.4042 15.0935L21.4351 24.4217L13.5 18.6565L5.5649 24.4217L8.59584 15.0935L0.660737 9.32827H10.4691L13.5 0Z" fill="#FFB800" />
            </svg>
            <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 0L16.5309 9.32827H26.3393L18.4042 15.0935L21.4351 24.4217L13.5 18.6565L5.5649 24.4217L8.59584 15.0935L0.660737 9.32827H10.4691L13.5 0Z" fill="#FFB800" />
            </svg>
            <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 0L16.5309 9.32827H26.3393L18.4042 15.0935L21.4351 24.4217L13.5 18.6565L5.5649 24.4217L8.59584 15.0935L0.660737 9.32827H10.4691L13.5 0Z" fill="#FFB800" />
            </svg>
            <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 0L16.5309 9.32827H26.3393L18.4042 15.0935L21.4351 24.4217L13.5 18.6565L5.5649 24.4217L8.59584 15.0935L0.660737 9.32827H10.4691L13.5 0Z" fill="#FFB800" />
            </svg>


        </CardFooter>
    </Card>
}