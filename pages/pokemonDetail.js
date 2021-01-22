import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import { useQuery } from '@apollo/client';
import { GET_POKEMON } from '../graphql/queries'
import { useRouter } from "next/router"
import styled from '@emotion/styled'

const Item = styled.div(() => ({
    display: 'flex',
    flexDirection: 'column',
    border: '1px LightBlue solid',
    padding: '10px',
    borderRadius: '10px',
    boxShadow: '1px 1px 5px #ccc'
}))

const GridContainer = styled.div(() => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '1rem',
    marginTop: '7rem',
    marginLeft: '2rem',
    marginRight: '2rem'
}))

const Image = styled.img(() => ({
    width: '50%',
    alignSelf: 'center'
}))

const Outlier = styled.div(() => ({
    margin: 'auto'
}))

const PokemonName = styled.h5(() => ({
    marginTop: '5px',
    marginBottom: '5px',
    fontSize: '20px',
    alignSelf: 'center',
    color: 'DarkRed'
}))

const Type = styled.p(() => ({
    fontSize: '17px',
    fontFamily: 'serif',
    color: 'DarkBlue',
    fontWeight: 'bold',
    marginBottom: '13px'
}))

const TypeKey = styled.p(() => ({
    color: 'black',
    fontWeight: 'bold',
}))

const PokemonDetail = ({ pokemon }) => {
    const router = useRouter()
    const {
        query: { pokemonName, pokemonImage },
    } = router

    const gqlVariables = {
        name: pokemonName,
    };

    const { data } = useQuery(GET_POKEMON, {
        variables: gqlVariables,
    });

    return (
        <div>
            <HeaderComponent headerText={'Pokemon Detail'} />
            <Outlier>
                <GridContainer>
                    <Item>
                        <Image src={pokemonImage} alt={pokemonName} />
                        <PokemonName>
                            {pokemonName}
                        </PokemonName>
                        <Type>
                            {/* ({data.pokemon.types.map(value => (
                            value.type.name + ' '
                        )
                        )}) */}
                        </Type>
                    </Item>
                </GridContainer>
            </Outlier>
            <FooterComponent />
        </div>
    )
}
export default PokemonDetail;
