import styled from '@emotion/styled'

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

const FooterComponent = () => {
    return (
        <Footer>
            test
        </Footer>
    )

}
export default FooterComponent;