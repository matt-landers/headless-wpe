import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import withData from "../lib/apollo";
import Link from "next/link";
import Head from "next/head";
import { NextComponentType, NextPageContext } from "next";
import { Layout } from "../components/layout";

interface HomeProps {
  DEBUG: string;
}

const Home: NextComponentType<NextPageContext, {}, HomeProps> = ({ DEBUG }) => {
  const { data } = useQuery(gql`
    query {
      posts {
        nodes {
          id
          title
          slug
          excerpt
        }
      }
    }
  `);

  const posts = data?.posts?.nodes;

  return (
    <Layout>
      <Head>
        <title>Headless WPE Blog</title>
      </Head>
      <header>
        <h1>Headless WPE {DEBUG == "1" ? "(Development)" : ""}</h1>
      </header>
      {posts &&
        posts.map((post) => (
          <article key={post.id}>
            <h2>
              <Link href={`/[slug]`} as={`/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </h2>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          </article>
        ))}
    </Layout>
  );
};

Home.getInitialProps = (context) => {
  return {
    DEBUG: process.env.DEBUG,
  };
};

export default withData(Home);
