import Head from 'next/head';
import ListComponent from '../components/ListComponent'
import { useEffect, useState } from 'react';
import { useQuery, ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { getPokemons } from '../graphql/queries'
import { useAppContext } from '../context/state'
import styled from '@emotion/styled'

const Header = styled.div(() => ({
  backgroundColor: 'pink',
  fontFamily: 'Roboto',
  boxShadow: '3px 3px 10px #888',
  fontSize: '34px',
  width: '100%',
  marginBottom: '3rem',
  height: '55px',
  position: 'fixed',
  top: '0',
  margin: 'auto',
  left: '0'
}))

const TextHeader = styled.p(() => ({
  textAlign: 'center',
  fontFamily: 'Roboto',
  fontSize: '30px',
  position: 'relative',
  top: '10px',
  margin: 'auto',
  left: '0'
}))

const Footer = styled.footer(() => ({
  textAlign: 'center',
  height: '55px',
  position: 'fixed',
  bottom: '0',
  margin: 'auto',
  left: '0'
}))


const Home = ({ pokemon }) => {
  const { dispatch } = useAppContext()
  const { data } = useQuery(getPokemons)
  useEffect(() => {
    dispatch({ type: 'SET_POKEMONS_LIST', payload: data.pokemons.results })
  }, pokemon)

  return (
    <div>
      <Head>
        <title>Poke App</title>
      </Head>
      <Header><TextHeader>Poke App</TextHeader></Header>
      <ListComponent pokemons={pokemon.pokemons.results} />
      <Footer>Testsadasdsdas</Footer>
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
      pokemon: data
    }
  }
}