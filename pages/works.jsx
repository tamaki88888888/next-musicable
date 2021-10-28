import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section  from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/section/article'

//ここに自分がやったこととかを描いていく
// import thumbInkdrop from '../punlic/images/works/inkdrop.png'

const Works = () => {
    return (
        <layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    {/* もし何か開発していたら描いたらいいよね */}
                    {/* <Section>
                        <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkDrop}>
                            A markdown note taking app
                            encrypted data sync support
                        </WorkGridItem>
                    </Section> */}
                </SimpleGrid>
            </Container>
        </layout>
    )
}

export default Works