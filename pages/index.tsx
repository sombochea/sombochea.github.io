import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import CustomImageLoader from "./helper/ImageLoader";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>home&nbsp;|&nbsp;sombochea&#39;s&nbsp;blog</title>
        <meta name="description" content="sombochea's blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="javascript:alert('hi')">my blog!</a>
        </h1>
      </main>

      <footer className={styles.footer}>
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <span className={styles.logo}>
            <Image
              loader={CustomImageLoader}
              src="/vercel.svg"
              alt="Vercel Logo"
              width={72}
              height={16}
            />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
