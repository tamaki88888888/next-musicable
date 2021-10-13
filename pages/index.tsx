import { useEffect } from "react";
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
  async function fetchEntries() {
    const entries = await client.getEntries();
    console.log(entries);
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
        <div>github</div>
        <div>情報を出してみる</div>
      </div>
      <div>記事の一覧をここに</div>
      <Article />
      <Link href="https://github.com/tamaki88888888">
        <a>git hubのリンク</a>
      </Link>
    </div>
  );
}
