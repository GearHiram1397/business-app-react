
import Header from './components/Header';
import styled from 'styled-components';
import SideBar from './components/SideBar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react'


// In this project we are going to do a Todo List with react and style components

function App() {
  // we set a  state sideBarToogle and setSideBarToogle to update the state to interact with 
  // the sidebar to know if its open or close
/* Setting the state of the sidebar to true and setting the todolist to the array of objects. */
const [sideBarToogle, setSideBarToogle] = useState(false)
const todoList = [{
  name: 'Clientes',
  color: '#fd76a1',
  icon: 'fas fa-user',
  link: '/clientes'
},
{
  name: 'Suplidores',
  color: '#70c4be',
  icon: 'fas fa-briefcase',
  link: '/suplidores'
},
{
  name: 'Inventario',
  color: '#ab6ddf',
  icon: 'fas fa-file-code',
  link: '/inventario'
},
]
  return (
    <Wrapper>
      <Header sideBarToogle={sideBarToogle} setSideBarToogle={setSideBarToogle} />
      <Main>
        <SideBar sideBarToogle={sideBarToogle} todoList={todoList} />
        <MainContent style={{ width: `calc(100vw - (${sideBarToogle ? '300px' : '70px'}))` }}>
          <TodoContent>
            <Tittle>DashBoard</Tittle>
            <Greeting>Buenos dias, Hiram 🚀</Greeting>
            <h3 style={{marginTop: '40px'}}>Elige una base de datos:</h3>
            <ButtonContainer>
            <Link style={{textDecoration:"none"}} to="/clientes"><Button style={{color: '#fd76a1'}}variant="outlined">Clientes</Button></Link>
            <Link style={{textDecoration:"none"}} to="/suplidores"><Button style={{color: '#70c4be'}} variant="outlined">Supplidores</Button></Link> 
            <Link style={{textDecoration:"none"}} to="/inventario"><Button style={{color: '#ab6ddf'}} variant="outlined">Inventario</Button></Link> 
            </ButtonContainer>
            

          </TodoContent>
        </MainContent>
      </Main>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
 background-color: #18181f;
 min-height: 100vh;
 min-width: 100vw;
 color: #eee;

`
const Main = styled.div`
 display: flex;
`
const MainContent = styled.div`
  display: flex;
  justify-content: center;
  transition: 0.3s;
  
  @media (max-width: 768px) { 
       
       padding-left: 35px;
   }
`

const TodoContent = styled.div`
  max-width: 700px;
  width: 100%;
`

const Tittle = styled.div`
  margin: 50px 0;
  font-size: 30px;
  font-weight: 700;
  
  
        @media (max-width: 768px) { 
       margin: 20px 0;
        font-size: 26px;
   }
    

`

const Greeting = styled.div`
  margin-bottom: 20px;
  font-size: 36px;
  font-weight: 800;
  
  @media (max-width: 768px) { 
       
      font-size: 30px;
   }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  align-items: flex-start;
  height: 100px;
  `