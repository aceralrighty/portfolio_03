import { forwardRef } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'
import Head from "next/head";
const LinkItem = ({href, path, target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue("gray.800", "whiteAlpha.900")
    return (
        <Link as={NextLink} href={href} scroll={false} p={2} bg={active ? "grassTeal" : undefined}
              color={active ? "#202023" : inactiveColor}
              target={target}
            {...props}>
            {children}
        </Link>
    )
}
const MenuLink = forwardRef((props, ref) => (
    <Link ref={ref} as={NextLink} {...props} />
))
const Navbar = props => {
    return (
        <Box position={"fixed"}
             as={"nav"}
             width={"100%"}
             bg={useColorModeValue('#ffffff40', '#20202380')}
             css={{backdropFilter: "blur(10px)"}}
             zIndex={2}
            {...props}>
            <Container display="flex"
                       p={2}
                       maxW="container.md"
                       wrap="wrap"
                       align="center"
                       justify="space-between">
                <Flex align={"center"} mr={5}>
                    <Heading as={"h1"} size={"lg"} letterSpacing={"tighter"}>
                        <Logo/>
                    </Heading>
                </Flex>
                <Box flex={1} align={"right"}>
                    <ThemeToggleButton/>
                    <Box ml={2} display={{base: 'inline-block', md: 'none'}}>
                        <Menu isLazy id={"navbar-menu"}>
                            <MenuButton as={IconButton} icon={<HamburgerIcon/>}
                                        variant={"outline"}
                                        aria-label={"Options"}/>
                            <MenuList>
                                <MenuItem as={MenuLink} href="/">
                                    About
                                </MenuItem>
                                <MenuItem as={MenuLink} href="/resume">
                                    Resume
                                </MenuItem>
                                <MenuItem as={MenuLink} href="/hobbies">
                                    Hobbies
                                </MenuItem>
                                <MenuItem as={MenuLink} href={"/education"}>
                                    Education
                                </MenuItem>
                                <MenuItem as={MenuLink} href="/Contact">
                                    Contact Me
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
export default Navbar