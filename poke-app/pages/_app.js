import '../styles/globals.css'
import apolloClient from '../graphql/graphql-client'
import styled from '@emotion/styled'
import { ApolloProvider } from "@apollo/client";
import { AppWrapper } from '../context/state';


const Layout = styled.div(() => ({
  maxWidth: '500px',
  margin: 'auto'

}))

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <AppWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppWrapper>
    </ApolloProvider>
  )
}

export default MyApp
