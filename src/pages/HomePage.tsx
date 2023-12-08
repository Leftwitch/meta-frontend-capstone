import { Box, Divider } from "@chakra-ui/react";
import { Featured } from "../components/Featured";
import { Hero } from "../components/Hero/Hero";
import { Reviews } from "../components/Review";



export const HomePage = () => <>
    <main>
        <Hero />
        <Box mt={8} />
        <Featured />
        <Divider my={16} />
        <Box mt={8} />
        <Reviews />
    </main>
</>