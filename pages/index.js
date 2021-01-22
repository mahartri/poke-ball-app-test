import Head from 'next/head';
import ListComponent from '../components/ListComponent'
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import { useEffect, useState } from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { useAppContext } from '../context/state'
import styled from '@emotion/styled'



const Home = ({ pokemon }) => {
  const { dispatch } = useAppContext()
  useEffect(() => {
    dispatch({ type: 'SET_POKEMONS_LIST', payload: pokemon.pokemons.results })
  }, pokemon)

  return (
    <div>
      <Head>
        <title>Poke App</title>
      </Head>
      <HeaderComponent headerText={'List Pokemons'} />

      <ListComponent pokemons={pokemon.pokemons.results} />
      <FooterComponent />
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