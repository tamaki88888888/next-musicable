import { useEffect } from "react";
//webpackなどを読んでくれているから重要
import Head from 'next/head';
//画像の最適化コンポーネント next/image が使えるようになる
import Image from 'next/image';
//pages/index.tsx には styles/pages/index.module.scss を追加する
import scss from '../styles/pages/index.module.scss';

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
      <div className={scss.ex}>たまかい</div>
      <Image src="/pages/musicable.png" alt="Vercel Logo" width={72} height={16} />
    </div>
  );
}