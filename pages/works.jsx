import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section  from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbWalknote from '../punlic/images/works/inkdrop.png'
import thumbInkdrop from '../punlic/images/works/inkdrop.png'

const Works = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkDrop}>
                        A markdown note taking app
                        encrypted data sync support
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="walknote" title="walknote" thumbnail={thumbWalknote}>

                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works