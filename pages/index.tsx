import { Container, Box, Heading } from '@chakra-ui/react';

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

export default function Home({ articles }) {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hi, I'm a music-writer based in Japan!
      </Box>
      <Box display={{md: "flex"}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Ko Tamaki
          </Heading>
          <p>Web Developer ( Developer / writer / music-media )</p>
        </Box>
      </Box>
    </Container>
  );
}