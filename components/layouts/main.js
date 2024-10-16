import Head from "next/head";
import {Box} from "@chakra-ui/react";
import {Container} from "postcss";
export default function Layout({ children, router }) {
    return (
        <Box as={"main"} pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Adam Ziv - Homepage</title>
            </Head>
            <Container maxWidth={"container.md"} pt={14}>
                {children}
            </Container>
        </Box>
    )
}