import Link from "next/link"

const Article = ({ article }) => {

  const { title, siteUrl } = article.fields

  return (
    <div className="article">
      <div className="fieatured">
        {/* image - thumb */}
      </div>
      <div className="content">
        <div className="info">
          <h4>{ title }</h4>
        </div>
        <div className="actions">
          <Link href={"/posts/" + siteUrl }><a>linkです</a></Link>
        </div>
      </div>
    </div>
  )
}

export default Article;