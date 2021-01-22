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

const HeaderComponent = ({ headerText }) => {
    return (
        <Header><TextHeader>{headerText}</TextHeader></Header>
    )
}
export default HeaderComponent;