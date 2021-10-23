import { createClient } from "contentful";
import { useRouter } from 'next/router';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

//contentful用のidを設定
export const getStaticPaths = async () => {
  const router = useRouter();
  const { slug } = router.query;
  const res = await client.getEntries({});

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    "fields.slug": params.slug
  })

  return {
    props: { article: items[0] }
  }
}

const ArticleDetails = ({ recipe }) => {
  console.log(recipe)

  return <p>Post: </p>;
};

export default ArticleDetails;