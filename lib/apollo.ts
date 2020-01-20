import { withData } from "next-apollo";
import { HttpLink } from "apollo-boost";

const config = {
  link: new HttpLink({
    uri: "http://headlesswpe.wpengine.com/graphql"
  })
};

export default withData(config);
