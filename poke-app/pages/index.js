import Head from 'next/head';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import ListComponent from '../components/ListComponent'
import { useAppContext } from '../src/context/state'

const Home = ({ launches }) => {
  const { state, dispatch } = useAppContext()
  console.log('pokemons', launches)
  return (
    <div>
      <Head>
        <title>Blog App</title>
      </Head>
      <h1>Blog</h1>
      <ListComponent pokemons={launches} />
    </div>
  )
}
export default Home;

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: gql`
        query pokemons($limit: Int, $offset: Int){
          pokemons(limit: $limit, offset: $offset){
            count
            next
            previous
            status
            message
            results {
              url
              name
              image
            }
          }
        }
        `
  })

  return {
    props: {
      launches: data
    }
  }
}