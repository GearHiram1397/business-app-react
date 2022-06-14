
import Header from './Header';
import styled from 'styled-components';
import SideBar from './SideBar';
import { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },

  {
    field: 'fullName',
    headerName: 'Full Name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    
  },
  { field: 'articulo', headerName:
     'Articulo', width: 130 
  },
  {
    field: 'cantidad',
    headerName: 'Cantidad',
    type: 'number',
    width: 90,
  }
];

const rows = [
  { id: 1, fullName: 'Snow Jon', articulo:'medicina', cantidad: 35 },
  { id: 2, fullName: 'Lannister Cersei',articulo:'agua', cantidad: 42 },
  { id: 3, fullName: 'Lannister Jaime',articulo:'arroz', cantidad: 45 },
  { id: 4, fullName: 'Stark Arya', articulo:'habichuelas',cantidad: 16 },
  { id: 5, fullName: 'Targaryen Daenerys',articulo:'carne fresca',cantidad: 40 },
];


// In this project we are going to do a Todo List with react and style components

function Suplidores() {
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
            <Tittle>Suplidores</Tittle>
            <Greeting>Agrega un suplidor nuevo a la AddPeople Database</Greeting>
            <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{backgroundColor: '#FFF', marginBottom: '40px'}}>
        <TextField
          required
          id="outlined-required"
          label="Name"
          defaultValue="Full Name"
        />
        <TextField
          required
          id="outlined-required"
          label="Articulo"
          defaultValue="Nombre de Articulo"
        />
        <TextField
          required
          type="number"
          id="outlined-number"
          label="Cantidad"
          defaultValue="Cantidad"
        />
        <ButtonContainer>
        <Button variant="contained" color="primary" type="submit">Add to Database</Button>
        </ButtonContainer>
        </div>
        
        </Box>
            <div style={{ height: 400, width: '100%', background: "#fff"}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        
      />
    </div>
          </TodoContent>
          
        </MainContent>
      </Main>
    </Wrapper>
  );
}

export default Suplidores;

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
  justify-content: center;
  margin-top: 20px;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`