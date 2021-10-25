import Link from "next/link"
import Image from "next/image"

const Article = ({ article }) => {

  const { title, slug, thumbnail } = article.fields

  return (
    <div className="article">
      <div className="fieatured">
        <Image
          src={"https:" + thumbnail.fields.file.url }
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
      </div>
      <div className="content">
        <div className="info">
          <h4>{ title }</h4>
        </div>
        <div className="actions">
          <Link href={"/posts/" + slug }><a>linkです</a></Link>
        </div>
      </div>
    </div>
  )
}

export default Article;