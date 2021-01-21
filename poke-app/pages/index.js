import Head from 'next/head';
import ListComponent from '../components/ListComponent'
import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { getPokemons } from '../graphql/queries'
import { useAppContext } from '../context/state'
import styled from '@emotion/styled'

const Header = styled.h2(() => ({
  color: 'black',
  justifyItems: 'center',
  textAlign: 'center',
  fontFamily: 'Roboto',
  fontSize: '34px'
}))

const Home = () => {
  const [pokemons, setPokemons] = useState([])
  const { dispatch } = useAppContext()
  const { data } = useQuery(getPokemons)
  useEffect(() => {
    if (data) {
      dispatch({ type: 'SET_POKEMONS_LIST', payload: data.pokemons.results })
      setPokemons(data.pokemons.results)
    }
  }, [])

  return (
    <div>
      <Head>
        <title>Poke App</title>
      </Head>
      <Header>Total owned</Header>
      <ListComponent pokemons={pokemons} />
    </div>
  )
}
export default Home;

// export async function getStaticProps() {
  // const client = new ApolloClient({
  //   uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
  //   cache: new InMemoryCache()
  // })

//   const { data } = await client.query({
//     query: gql`
//         query pokemons($limit: Int, $offset: Int){
//           pokemons(limit: $limit, offset: $offset){
//             count
//             next
//             previous
//             status
//             message
//             results {
//               url
//               name
//               image
//             }
//           }
//         }
//         `
//   })

//   return {
//     props: {
//       pokemons: data
//     }
//   }
// }