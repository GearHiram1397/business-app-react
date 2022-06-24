import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Home = (props) => {
  return (
    <Wrapper>
      <Content>
        <Title>
          <h1>Bienvenidos a Addpeople 🚀</h1>
        </Title>
        <SubTitle>
          <h2>
            Somos un negocio independiente que nos dedicamos a almacenar tus datos y los de tu negocio para que puedas acceder a ellos en cualquier momento.
            Para asi puedes acceder a tus datos de manera facil segura y rapida.
          </h2>
        </SubTitle>
        <Login><Link style={{textDecoration: "none", color: "#fff"}} to={'/dashboard'} > Login </Link></Login>
      </Content>
    </Wrapper>
  )
}

export default Home

const Wrapper = styled.div`
  background-color: #18181f;
    min-height: 100vh;
    min-width: 100vw;
    color: #eee;
    background: #2b5876;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #4e4376, #2b5876);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #4e4376, #2b5876); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  ;`
const Content = styled.div`
  display: flex;
  justify-content: center;
  transition: 0.3s;
  flex-direction: column;
  align-items: center;
  `

const Title = styled.div`
  margin: 50px 0;
  font-size: 30px;
  font-weight: 700;
 

  & > h1 {
    color: #fff !important;
  }
  `
const SubTitle = styled.div`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  line-height: 2;
  letter-spacing: 0.5px;
  width: 70%;
    & > h2 {
      color: #fff !important;
    }
  `
const Login = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #2b5896;
  color: #eee;
 
  font-size: 20px;
  font-size: 30px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: 0.3s;


 
  &:hover {
      background-color: #4e4396;
      color: #18181f;
      }
`