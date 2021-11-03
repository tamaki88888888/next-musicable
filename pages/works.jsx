import { Container, Heading, SimpleGrid} from "@chakra-ui/react";
import Section  from '../components/section'
import { WorkGridItem } from '../components/grid-item'
// import Layout from '../components/section/article'
import thumbAkitsuHP from '../public/images/works/Akitsudoro.png'

const Works = () => {
    return (
        <layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem id="akitsudoro" title="Inkdropa" thumbnail={thumbAkitsuHP}>
                            A corporate web site, witch is Akistu-doro Co., Ltd.
                            (秋津道路のホームページ)
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="workb" title="Inkdropb" thumbnail={thumbAkitsuHP}>
                            A markdown note taking app
                            encrypted data sync support
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </layout>
    )
}

export default Works