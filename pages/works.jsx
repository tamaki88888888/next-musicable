import { Container, Heading, SimpleGrid} from "@chakra-ui/react";
import Section  from '../components/section'
import { WorkGridItem } from '../components/grid-item'
// import Layout from '../components/section/article'
import thumbAkitsuHP from '../public/images/works/Akitsudoro.png'
// import thumbMusicable from '../public/images/works/Musicable.png'
import thumbMusicable from '../public/images/works/Musicable.png'
import thumbDressup from '../public/images/works/Dressup.png'

const Works = () => {
    return (
        <layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem id="akitsudoro" title="Akitsudoro HP" thumbnail={thumbAkitsuHP}>
                            A corporate web site, witch is Akistu-doro Co., Ltd.
                            (秋津道路のホームページ)
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="musicable" title="Musicable" thumbnail={thumbMusicable}>
                            An American pops media. Comming soon at 2021.12.1
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="dressup" title="Dressup" thumbnail={thumbDressup}>
                            An E-commerce site of wordpress theme. Comming soon at 2022.1.1
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </layout>
    )
}

export default Works