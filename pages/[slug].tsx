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
      <h1>{post?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post?.content }} />
    </Layout>
  );
};

export default withData(Post);
