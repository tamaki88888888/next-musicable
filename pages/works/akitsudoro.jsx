import { Container, Badge, Link, List, ListItem  } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from "../../components/work";
import P from '../../components/paragraph'
import Layout from '../../components/section/article'

const Work = () => {
    return (
        <Layout title="Akitsudoro">
            <Container>
                <Title>
                    Akitsudoro - HP <Badge>2021</Badge>
                </Title>
                    <P>A company homepage site of Akistu-doro Co., Ltd. 
                        witch is pavement construction company in Hokkaido. </P>
                    <List ml={4} my={4}>
                        <ListItem>
                            <Meta>Website</Meta>
                            <Link href="/">
                                https://akitsudoro.com/ <ExternalLinkIcon mx="2px"/>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>stack</Meta>
                            <span>WordPress, AdobeXD</span>
                        </ListItem>
                        <WorkImage src="/images/works/akitsudoro_01.png" alt="akitsudoro"></WorkImage>
                        <WorkImage src="/images/works/akitsudoro_02.png" alt="akitsudoro"></WorkImage>
                        <WorkImage src="/images/works/akitsudoro_03.png" alt="akitsudoro"></WorkImage>
                        {/* <ListItem>
                            <Meta>Blogpost</Meta>
                            <Link href="https://blog">
                                How i&apos;ve Attracted <ExternalLinkIcon mx="2px"/>
                            </Link>
                        </ListItem> */}
                    </List>
            </Container>
        </Layout>
    )
}

export default Work