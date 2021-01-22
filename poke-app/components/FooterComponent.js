import styled from '@emotion/styled'
import { useRouter } from 'next/router'

const Footer = styled.div(() => ({
    textAlign: 'center',
    justifyContent: 'center',
    height: '55px',
    position: 'fixed',
    width: '100%',
    bottom: '0',
    margin: 'auto',
    left: '0',
    backgroundColor: 'white',
}))

const FooterItem = styled.div(() => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    justifyContent: 'space-between',
}))

const Item = styled.div((props) => ({
    display: 'grid',
    gridTemplateColumns: 'auto 85px',
    justifyContent: 'center',
    textAlign: 'center',
    position: 'relative',
    top: '15px',
    right: props.isRightItem ? '1rem' : '0'
}))
const Icon = styled.img(() => ({
    maxWidth: '25px',
    maxHeight: '25px',
    borderRadius: '4px'
}))

const ItemDescription = styled.div((props) => ({
    fontSize: '20px',
    position: 'relative',
    left: props.positon === 'right' ? '9px' : '4px'
}))


const FooterComponent = () => {
    const router = useRouter()

    const handleClickButton = (e, path) => {
        e.preventDefault()
        router.push(path)
    }

    return (
        <Footer>
            <FooterItem>
                <Item onClick={(e) => handleClickButton(e, '/')}>
                    <Icon src='/findAllPokemons.png' alt="beranda" />
                    <ItemDescription position="left">Beranda</ItemDescription>
                </Item>
                <Item isRightItem={true} onClick={(e) => handleClickButton(e, '/myPokemons')} >
                    <Icon src='/pokeball.png' alt="beranda" />
                    <ItemDescription position="right">My Pokes</ItemDescription>
                </Item >

            </FooterItem>
        </Footer>
    )

}
export default FooterComponent;