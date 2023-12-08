import { Box, Button, Grid, GridItem, Heading, Image, Link } from "@chakra-ui/react";

import logo from '../../assets/littlelemon_logo.png';
import { Menu } from "./Menu";
import { MobileMenu } from "./MobileMenu";


const MENU_ITEMS = [

    <Link href='/' key='home'>
        <Button variant="link" size='lg' colorScheme='black' textDecoration='none'>
            <Heading size='lg'>Home</Heading>
        </Button>
    </Link>,

    <Link href='/menu' key='menu'>
        <Button variant="link" size='lg' colorScheme='black' textDecoration='none'>
            <Heading size='lg'>Menu</Heading>
        </Button>
    </Link>,

    <Link href='/contact' key='contact'>
        <Button variant="link" size='lg' colorScheme='black' textDecoration='none'>
            <Heading size='lg'>Contact</Heading>
        </Button>
    </Link>,

    <Link href='/gallery' key='gallery'>
        <Button variant="link" size='lg' colorScheme='black' textDecoration='none'>
            <Heading size='lg'>Gallery</Heading>
        </Button>
    </Link>,
]

export const Header = () => {

    return <Box width='100%' height={[100]} bg='white' px={10}>
        <Grid templateColumns='1fr 5fr' h='100%'>
            <GridItem w='100%' display='flex' alignItems='center'>
                <Link href="/">
                    <Image
                        src={logo}
                        alt="logo"
                        objectFit='cover'
                        boxSize={[50]} />
                </Link>
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

