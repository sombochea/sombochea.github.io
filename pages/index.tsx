import type { NextPage } from "next";
import Head from "next/head";
import useSWR from "swr";
import { fetchAllPosts } from "../services/post.service";
import styles from "../styles/default.module.css";
import { Post } from "./api/posts";
import styled from "styled-components";

const GridView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;

const PostCard = styled.div`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 100%;
  max-width: 100%;

  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }

  @media (max-width: 600px) {
    margin: 0.5rem;
  }

  @media (max-width: 400px) {
    margin: 0.25rem;
  }
`;

const PostTitle = styled.h2`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
`;

const PostDescription = styled.p`
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const PostAuthor = styled.p`
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const Bolder = styled.span`
  font-weight: 800;
`;

const Home: NextPage = () => {
  const { data, error } = useSWR("/api/posts", fetchAllPosts);

  if (error) return <div>failed to load</div>;

  return (
    <div className={styles.container}>
      <Head>
        <title>home&nbsp;|&nbsp;sombochea&#39;s&nbsp;blog</title>
        <meta name="description" content="sombochea's blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://sombochea.medium.com">my blog!</a>
        </h1>
        <h3 className={styles.description}>
          We&#39;re building better things
          <br />
          💖💖💖
          <br />
          <Bolder>BE-BOLD</Bolder> * BE-RIGHT * BE-HONEST
        </h3>

        <GridView>
          {(data &&
            data.map((post: Post) => (
              <PostCard key={post.id}>
                <PostTitle title={post.title}>{post.title}</PostTitle>
                {/* <PostAuthor>{post.created_by}</PostAuthor> */}
                <PostDescription title={post.short_description}>
                  {post.short_description}
                </PostDescription>
              </PostCard>
            ))) || (
            <>
              <br />
              <p>{"Loading..."}</p>
            </>
          )}
        </GridView>
      </main>
    </div>
  );
};

export default Home;
