import { Container, Badge, Link, List, ListItem  } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from '../../components/section/article'

const Work = () => {
    return (
        <Layout title="Inkdrop">
            <Container>
                <Title>
                    inkdrop <Badge>20216</Badge>
                </Title>
                    <p>A Markdown note-taking app width 100+ plugins A Markdown note-taking app width 100+ plugins A Markdown note-taking app width 100+ plugins</p>
                    <List ml={4} my={4}>
                        <ListItem>
                            <Meta>Website</Meta>
                            <Link href="/">
                                https://wwwwwwwwwww <ExternalLinkIcon mx="2px"/>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Platform</Meta>
                            <span>Windows/macOS/Linux</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Blogpost</Meta>
                            <Link href="https://blog">
                                How i've Attracted <ExternalLinkIcon mx="2px"/>
                            </Link>
                        </ListItem>
                    </List>
            </Container>
        </Layout>
    )
}

export default Work