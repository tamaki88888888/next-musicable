import { useEffect } from "react";
//webpackなどを読んでくれているから重要
import Head from 'next/head';
//画像の最適化コンポーネント next/image が使えるようになる
import Image from 'next/image';
//pages/index.tsx には styles/pages/index.module.scss を追加する
import styles from '../styles/pages/index.module.scss';

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
      <div>キジデース</div>
    </div>
  );
}