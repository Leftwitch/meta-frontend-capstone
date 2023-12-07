import { Box, Button, Grid, GridItem, Heading, Image } from "@chakra-ui/react";

import logo from '../../assets/littlelemon_logo.png';
import { Menu } from "./Menu";
import { MobileMenu } from "./MobileMenu";


const MENU_ITEMS = [

    <Button variant="link" size='lg' colorScheme='black' textDecoration='none'>
        <Heading size='lg'>Button</Heading>
    </Button>,

    <Button variant="link" size='lg' colorScheme='black' textDecoration='none'>
        <Heading size='lg'>Button</Heading>
    </Button>,

    <Button variant="link" size='lg' colorScheme='black' textDecoration='none'>
        <Heading size='lg'>Button</Heading>
    </Button>,

    <Button variant="link" size='lg' colorScheme='black' textDecoration='none'>
        <Heading size='lg'>Button</Heading>
    </Button>
]

export const Header = () => {

    return <Box width='100%' height={[100]} background='white' p={5}>
        <Grid templateColumns='1fr 5fr' h='100%'>
            <GridItem w='100%' display='flex' alignItems='center'>
                <Image
                    src={logo}
                    alt="logo"
                    objectFit='cover'
                    boxSize={[50]} />
            </GridItem>
            <GridItem display='flex' alignItems='center' justifyContent='flex-end'>
                <Menu>
                    {MENU_ITEMS}
                </Menu>
                <MobileMenu>
                    {MENU_ITEMS}
                </MobileMenu>
            </GridItem>
        </Grid>
    </Box >
}

