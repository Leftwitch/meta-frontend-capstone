import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"

export const FeaturedCard = () => {
    return <Card className="featured-card" as={motion.div} initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}

    >
        <CardBody>
            <Image
                src='https://images.squarespace-cdn.com/content/v1/57879a6cbebafb879f256735/1579721909133-R2KSZ8VGDGBI90DYATBK/header4.jpg'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
                <Heading size='md'>Food Special</Heading>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, soluta. Voluptatem amet hic fugit officiis pariatur explicabo culpa et sapiente molestiae exercitationem. Quisquam incidunt, ipsum eius pariatur provident inventore nesciunt.
                </Text>
                <Text color='primary' fontSize='2xl'>
                    $450
                </Text>
            </Stack>
        </CardBody>
        <Divider color='gray.200' />
        <CardFooter>
            <ButtonGroup spacing='2'>
                <Button variant='solid' bg='primary'>
                    Order Now
                </Button>
            </ButtonGroup>
        </CardFooter>
    </Card>
}