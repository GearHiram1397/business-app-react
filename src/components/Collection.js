
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
  headerName: 'Nombre completo',
  description: 'This column has a value getter and is not sortable.',
  sortable: false,
  width: 160,
  
},
  {
    field: 'limite',
    headerName: 'Limite de Credito',
    type: 'number',
    width: 160,
  },
  {
    field: 'direccion',
    headerName: 'Direccion',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    
  },
];

const rows = [
  { id: 1, fullName: 'Hiram Snow', limite: 3500, direccion: 'Calle falsa 123562' },
  { id: 2, fullName: 'Henry Lannister',limite: 4200, direccion: 'Calle falsa 12312' },
  { id: 3, fullName: 'Jon Lannister', limite: 4500, direccion: 'Calle falsa 1232' },
  { id: 4, fullName: 'Hector Stark', limite: 1600, direccion: 'Calle falsa 12352' },
  { id: 5, fullName: 'Bryan Targaryen',limite: 2000, direccion: 'Calle falsa 1243' },
  { id: 6, fullName: 'Katy Melisandre', limite: 1500, direccion: 'Calle falsa 1123' },
  { id: 7, fullName: 'Clifford', limite: 4400, direccion: 'Calle falsa 1423' },
  { id: 8, fullName: 'Frances', limite: 3600, direccion: 'Calle falsa 1323' },
  { id: 9, fullName: 'Roxie', limite: 6500, direccion: 'Calle falsa 124' },

];

// In this project we are going to do a Todo List with react and style components

function Collection() {
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
            <Tittle>Clientes</Tittle>
            <Greeting>Agrega un nuevo cliente a la AddPeople Database</Greeting>
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
          type="number"
          id="outlined-number"
          label="Limite de Credito"
          defaultValue="Credito"
        />
        <TextField
          required
          id="outlined-required"
          label="Direccion"
          defaultValue="Direccion"
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

export default Collection;

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