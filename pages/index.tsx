import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'
import styles from '../styles/pages/index.module.scss';
import Article from '../components/article';

//contentful をインポート
import * as contentful from "contentful";
const client = contentful.createClient({
  accessToken: "ZdOfpib3z3Q12HCPwhHZP4qOIYPM3bqD8X36pp6gcak",
  space: "w8l69ez742p4"
});

export default function Home() {
  const [entries, setEntries] = useState();
  async function fetchEntries() {
    const entries = await client.getEntries();
  }

  useEffect(() => {
    (async() => {
      await fetchEntries();
    })();
  }, []);
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
      <ArticleList articleData={entries.items} />
    </div>
  );
}

const ArticleList = (props) => {
  const articleData = props
  return <h1>Hello,</h1>;
}