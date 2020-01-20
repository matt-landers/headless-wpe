import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import withData from "../lib/apollo";
import { useRouter } from "next/router";
import { Layout } from "../components/layout";

const Post = props => {
  const router = useRouter();
  const { slug } = router.query;

  const { data } = useQuery(gql`
    query {
      postBy(slug: "${slug}") {
        title
        content
      }
    }
  `);

  const post = data?.postBy;

  return (
    <Layout>
      <h2>Headless WPE</h2>
      <h1>{post?.title}</h1>
      <article className="post">
        <div dangerouslySetInnerHTML={{ __html: post?.content }} />
      </article>
    </Layout>
  );
};

export default withData(Post);
