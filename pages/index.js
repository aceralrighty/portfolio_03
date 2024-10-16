import {Container} from "postcss";
import {Box, Button, Heading, Link, List, ListItem} from "@chakra-ui/react";
import Image from "next/image";
import Section from "@/components/section";
import Paragraph from "@/components/paragraph";
import {BioSection, BioYear} from "@/components/bio";
import {IoLogoGithub} from "react-icons/io5";
import {IoLogoInstagram} from "react-icons/io";

const Home =() => {
    return (
        <Container>
            <Box borderRadius={"lg"} bg={"red"} p={"3"} mb={6} align={"center"}>
                Hello! I&apos;m a full-stack software engineer
            </Box>
            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as={"h2"} variant={"page - title"}>
                        Adam Ziv
                    </Heading>
                    <p>Software Engineer</p>
                </Box>
                <Box flexShrink={0}
                     mt={{base: 4, md: 0}}
                     ml={{md: 6}}
                     textAlign={"center"}>
                    <Box borderColor={"whiteAlpha.800"}
                         borderWidth={2}
                         borderStyle={"solid"}
                         w={"100px"}
                         h={"100px"}
                         display={"inline-block"}
                         borderRadius={"full"}
                         overflow={"hidden"}>
                        <Image src={"/images/headshot.png"} alt={"Profile Picture"} width={100} height={100}/>
                    </Box>
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as={"h3"} variant={"section-title"}>
                    Work
                </Heading>
                <Paragraph>
                    I am
                </Paragraph>
            </Section>

            <Section delay={0.2}>
                <Heading as={"h3"} variant={"section-title"}>
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2000</BioYear>
                    Born in Deleon Springs, Florida.
                </BioSection>
                <BioSection>
                    <BioYear>2025</BioYear>
                    Completed A.A.S program in Computer Software Development at Indian Hills Community College
                </BioSection>

            </Section>
            <Section delay={0.3}>
                <Heading as={"h3"} variant={"section-title"}>
                    On the web
                </Heading>
                <List>
                    <ListItem>
                        <Link href={"https://github.com/aceralrighty"} target={"_blank"}>
                            <Button variant={"ghost"} colorScheme={"teal"} leftIcon={<IoLogoGithub/>}>
                                @aceralrighty
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href={"https://www.instagram.com/adam__ziv"} target={"_blank"}>
                            <Button variant={"ghost"} colorScheme={"teal"} leftIcon={<IoLogoInstagram/>}>
                                @adam_ziv
                            </Button>
                        </Link>
                    </ListItem>
                </List>
            </Section>
        </Container>
    );
}
export default Home;