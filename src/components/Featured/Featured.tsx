import { Grid, GridItem, Heading, VStack } from "@chakra-ui/react";
import { FeaturedCard } from "./FeaturedCard";

export const Featured = () => {

    return <VStack spacing={4}>
        <Heading>OUR BESTSELLING SPECIAL FOODS</Heading>
        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']} gap={4} p={10}>
            <GridItem>
                <FeaturedCard />
            </GridItem>
            <GridItem>
                <FeaturedCard />
            </GridItem>
            <GridItem>
                <FeaturedCard />
            </GridItem>
            <GridItem>
                <FeaturedCard />
            </GridItem>
        </Grid>
    </VStack>

}