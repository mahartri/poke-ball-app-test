import React from 'react';
import styled from '@emotion/styled'


const Container = styled.div(() => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem',
    marginLeft: '2rem',
    marginRight: '2rem'
}))

const Item = styled.div(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
    border: '1px #ccc solid',
    padding: '10px',
    maxHeight: '180px',
    borderRadius: '10px',
    boxShadow: '1px 1px 2px #ccc',
    borderColor: '#ee1515'
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
        <div>
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
        </div >
    )
}
export default ListComponent;






