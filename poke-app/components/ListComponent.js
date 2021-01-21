import React from 'react';
import styled from '@emotion/styled'


const Container = styled.div(() => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '5px',
    // margin: 'auto',
    // positon: 'relative',
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
    padding: '10px',
    maxHeight: '180px',
    height: '90%',
    maxWidth: '130px',
    width: '90%',
    borderRadius: '10px',
    boxShadow: '1px 1px 2px #ccc',
    borderColor: '#ee1515',
}))

const PokemonName = styled.h5(() => ({
    textAlign: 'center',
    justifyContent: 'space-between',
}))

const ListComponent = ({ pokemons }) => {
    console.log(pokemons)
    const handleClickItem = (e) => {
    }

    return (
        <Body>
            <Container>
                {pokemons.map(pokemon => (
                    <Item
                        onclick={e => handleClickItem(e, pokemon.id)}
                    >
                        <img src={pokemon.image} alt="" />
                        <PokemonName>{pokemon.name}</PokemonName>
                        <p></p>
                    </Item>
                ))}
            </Container>
        </Body >
    )
}
export default ListComponent;






