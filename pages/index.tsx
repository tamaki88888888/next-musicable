import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'
import styles from '../styles/pages/index.module.scss';
import Article from '../components/article';

//contentfulとコネクションを貼る
import { createClient } from "contentful";

//contentful用のidを設定
export async function getStaticProps() {

  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({});

  return {
    props: {
      articles: res.items
    }
  }

}

export default function Home({ articles }) {

  console.log(articles);

  return (
    <div>
      <Head>
        <title>musicable</title>
      </Head>
      <div className={styles.logo} >
        <Image src="/pages/musicable.png" alt="Musicable logo" width={200} height={112} />
        <div>develop</div>
        <div>music</div>
        <Link href="https://github.com/tamaki88888888">
          <a>git hubのリンク</a>
        </Link>
      </div>
      <div>記事の一覧をここに</div>
      <div className="article-list">
        {articles.map(article => (
          <Article
            key={article.sys.id}
            article={article}
          />
        ))}
      </div>
    </div>
  );
}