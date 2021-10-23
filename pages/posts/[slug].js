import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {

  //article 全件取得
  const res = await client.getEntries({
    content_type: "article"
  })

  //全件のパラメーターだけを配列形式で取得
  //[ { params: { slug: 'test2' } }, { params: { slug: 'test1' } } ]
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

  //getStaticProps内だとparamsがとれる？
  console.log(params)
  
  const { items } = await client.getEntries({
    content_type: "article",
    "fields.slug": params.slug
  })

  return{
    props: { article: items[0] }
  }
}


export default function ArticleDetails({ article }) {
  return (
    <p>details </p>
  );
};