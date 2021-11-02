import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from '../components/section/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbFishWorkflow from '../public/images/contents/musicable.png'
import thumbMyDeskSetup from '../public/images/contents/musicable.png'
import thumb500PaidUsers from '../public/images/contents/musicable.png'
import thumbFinancialGoal from '../public/images/contents/musicable.png'
import thumbHowToPriceYourself from '../public/images/contents/musicable.png'
import thumb50xFaster from '../public/images/contents/musicable.png'

const Posts = () => (
    <Layout title="Posts">
        <Container>
            <Heading as="h4" fontSize={20} mb={4}>
                Popular Posts
            </Heading>
            <Section delay={0.1}>
                <SimpleGrid columns={[1,2,2]} gap={6}>
                    <GridItem
                        tilte="my Fish workflow"
                        thumbnail={thumbFishWorkflow}
                        href="#"
                    />
                    <GridItem
                        tilte="My desk setup ()"
                        thumbnail={thumbFishWorkflow}
                        href="#"
                    />
                    <GridItem
                        tilte="My desk setup ()"
                        thumbnail={thumbFishWorkflow}
                        href="#"
                    />
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Posts