import { Container, Box, Heading, Image, Link, List, ListItem, useColorModeValue, Button, Icon } from '@chakra-ui/react';
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import Layout from '../components/section/article'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub ,IoPizza } from 'react-icons/io5'

//contentfulとコネクションを貼る
// import { createClient } from "contentful";

//contentful用のidを設定
// export async function getStaticProps() {

//   const client = createClient({
//     space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
//     accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
//   });

//   const res = await client.getEntries({ content_type: "article" });

//   return {
//     props: {
//       articles: res.items
//     }
//   }
// }

//export default function Home({ articles }) { contentfulが使えなかったら削除
export default function Home() {
  const thumbnail = `/images/thumbnail${useColorModeValue('-sydney','-pizza')}.png`
  return (
    <Layout>
      <Container>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
          I&apos;m a creater in Japan ! Hello from the other side ! 
        </Box>
        <Box display={{md: "flex"}}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Ko Tamaki
            </Heading>
            <p>Web Developer ( Developer / writer / music-media )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{base: 4, md: 0}}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteArpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src={thumbnail}
              alt=" Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Ko is a freelance and a Front-end developer based in Tokyo and Kanagawa 
            with a passion for building Homepage and Web Application. 
            Especially in building HomePage, there are thousands of thousands of tips in his body.
            when not online, he loves camping with his music playlist.
            He live on {' '}
            <NextLink href="https://www.instagram.com/p/BnzuGFUh69S/">
              <Link>Pizza</Link>
            </NextLink>
             .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" >
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1995</BioYear>
            Born in Okinawa (沖縄), Japan.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Worked at Sydney Central YHA. (シドニーセントラルYHA入社)
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Graduated school of Industrial Management at University Of The Ryukyus. (琉球大学観光産業科学部産業経営学科)
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Worked at Placole (株式会社プラコレ入社)
          </BioSection>
          <BioSection>
            <BioYear>2022 to present</BioYear>
            Work as a freelance
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I 🤍
          </Heading>
          <Paragraph>
            Music, Radio({''}
              <Link href="https://youtu.be/SfbpJGwqtmo?t=133">
                as MC
              </Link>
            ), Playing Guiter, web design, Traveling
          </Paragraph>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/tamaki88888888" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal" 
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @tamaki88888888
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/koukoukokoko" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal" 
                  leftIcon={<Icon as={IoLogoTwitter} 
                />}>
                  @koukoukokoko
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.instagram.com/koutamakin/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal" 
                  leftIcon={<Icon as={IoLogoInstagram} 
                />}>
                  @koutamakin
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://okinawanpizza.hatenablog.com/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal" 
                  leftIcon={<Icon as={IoPizza} 
                />}>
                  https://okinawanpizza.hatenablog.com/
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
}