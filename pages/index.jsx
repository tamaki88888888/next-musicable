import { Container, Box, Heading, Image, Link, useColorModeValue, Button } from '@chakra-ui/react';
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
//contentfulとコネクションを貼る
import { createClient } from "contentful";

//contentful用のidを設定
export async function getStaticProps() {

  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "article" });

  return {
    props: {
      articles: res.items
    }
  }

}

//Imageコンポーネント用に自分のプロフィール画像を追加する
export default function Home({ articles }) {
  return (
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
        Hi, I'm a music-writer based in Japan!
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
          aligm="center"
        >
          <Image
            borderColor="whiteArpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/tamaki.jpg"
            alt=" Profile Image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Ko is a freelance and a web Developer
          <NextLink href="/works/inkdrop">
            <Link>Inkdrop</Link>
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
        <Heading as="h3" bariant="section-title">
          Bio
        </Heading>
        <BioSection>
        <BioYear>1984</BioYear>
          Born in Okinawa (沖縄), Japan.
        </BioSection>
        <BioYear>202</BioYear>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" bariant="section-title">
          I 🤍
        </Heading>
        <Paragraph>
          好きなこと
        </Paragraph>
      </Section>
    </Container>
  );
}