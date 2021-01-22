import React from 'react';
import Link from "next/link"
import styled from '@emotion/styled'
import { useAppContext } from '../context/state'


const Container = styled.div(() => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '5px',
}))

const Body = styled.div(() => ({
    marginTop: '5rem',
    marginBottom: '4rem',
    marginLeft: '10px',
    marginRight: 'auto',
}))

const Item = styled.div(() => ({
    boxSizing: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'center',
    border: '1px #ccc solid',
    maxHeight: '60px',
    height: '100%',
    maxWidth: '130px',
    width: '90%',
    borderRadius: '10px',
    boxShadow: '1px 1px 5px #ccc',
    borderColor: '#ee1515',
    marginBottom: '1rem'
}))

const PokemonName = styled.h5(() => ({
    textAlign: 'center',
    justifyContent: 'space-between',
}))

const Text = styled.h4(() => ({
    top: '5px',
    marginBottom: '2rem',
    width: '100%',
    height: '2rem',
}))

const UpperComponent = styled.div(() => ({
    height: '2rem',
    marginBottom: '4px'
}))

const ListComponent = ({ pokemons }) => {
    const { state } = useAppContext()

    return (
        <Body>
            <UpperComponent>
                <Text>Total owned: {state.totalOwned}</Text>
            </UpperComponent>
            <Container>
                {pokemons.map((pokemon, index) => (
                    <Link href={{
                        pathname: "/pokemonDetail",
                        query: { pokemonName: pokemon.name, pokemonImage: pokemon.image }
                    }}>
                        <Item>

                            <PokemonName>{pokemon.name}</PokemonName>
                            <p></p>
                        </Item>
                    </Link>
                ))}
            </Container>
        </Body >
    )
}
export default ListComponent;






