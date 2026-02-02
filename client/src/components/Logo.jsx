import logo from '../assets/images/logo.png'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  
  .logo {
    width: 270px;
    height: auto;
    max-height: 100px;
    object-fit: contain;
  }
`

const Logo = () => {
  return (
    <Wrapper>
      <img src={logo} alt="trackr" className="logo"/>
    </Wrapper>
  )
}

export default Logo