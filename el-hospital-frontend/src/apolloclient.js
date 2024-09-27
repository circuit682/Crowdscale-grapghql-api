
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.studio.thegraph.com/query/89821/el-hospital/version/latest', //your actual subgraph URL
  cache: new InMemoryCache(),
});

export default client;