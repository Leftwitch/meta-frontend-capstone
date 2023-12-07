import { Grid, GridItem, Heading, VStack } from "@chakra-ui/react";
import { animate, stagger, useInView } from "framer-motion";
import { createRef, useEffect } from "react";
import { FeaturedCard } from "./FeaturedCard";

export const Featured = () => {
    const ref = createRef<HTMLDivElement>();
    const inView = useInView(ref);

    useEffect(() => {
        animate('.featured-card', { opacity: 1 }, { delay: stagger(0.1) })
    }, [inView])

    return <VStack spacing={4}>
        <Heading>OUR BESTSELLING SPECIAL FOODS</Heading>
        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']} gap={4}>
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