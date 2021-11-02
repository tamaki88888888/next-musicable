import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

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
  
  const { items } = await client.getEntries({
    content_type: "article",
    "fields.slug": params.slug
  })

  return{
    props: { article: items[0] }
  }
}


export default function ArticleDetails({ article }) {
  const { thumbnail, Title, detail} = article.fields

  return (
    <div>
      <div className="banner">
        <Image 
          src={"https:" + thumbnail.fields.file.url}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
          alt="バナー"
          /> 
        <h2>{ Title }</h2>
      </div>
      <div className="detail">
        <h3>detail</h3>
        <div>{ documentToReactComponents(detail) }</div>
      </div>
    </div>
  );
};