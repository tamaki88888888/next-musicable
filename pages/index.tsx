import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import scss from '../styles/index.module.scss'

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
      <div className={scss.ex}>
          たまかい
        </div>
    </div>
  );
}

