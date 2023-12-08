import { Grid, GridItem, Heading, VStack } from "@chakra-ui/react"
import { Review } from "./Review"

export const Reviews = () => {

    return <VStack spacing={4}>
        <Heading>WHAT OUR CUSTOMERS SAY</Heading>
        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']} gap={4} p={10}>
            <GridItem>
                <Review />
            </GridItem>
            <GridItem>
                <Review />
            </GridItem>
            <GridItem>
                <Review />
            </GridItem>
        </Grid>
    </VStack>
}