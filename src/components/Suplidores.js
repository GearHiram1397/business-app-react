
import Header from './Header';
import styled from 'styled-components';
import SideBar from './SideBar';
import { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {db} from '../firebase';
import { collection, orderBy , onSnapshot, query, addDoc, serverTimestamp } from 'firebase/firestore'
import { useEffect } from 'react'
import {doc, deleteDoc,} from 'firebase/firestore'
import "antd/dist/antd.css";
import { Modal, Input } from 'antd';
import {EditOutlined, DeleteOutlined } from '@ant-design/icons'

// In this project we are going to do a Todo List with react and style components

function Suplidores() {
  // we set a  state sideBarToogle and setSideBarToogle to update the state to interact with 
  // the sidebar to know if its open or close
/* Setting the state of the sidebar to true and setting the todolist to the array of objects. */
const [sideBarToogle, setSideBarToogle] = useState(false)
const [number, setNumber] = useState(1)
const [fullName, setFullName] = useState('')
const [articulo, setArticulo] = useState('')
const [isEdited, setIsEdited] = useState(false)
const [editing, setEditing] = useState(null)
const [cantidad, setCantidad] = useState(0)
const [newRows, setNewRows] = useState([
  { id: 1, fullName: 'Snow Jon', articulo:'medicina', cantidad: 35 },

])
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

  useEffect(() => {
    const todoListQuery = query(
      collection(db, 'suplidores'), 
      orderBy("createdAt", 'asc')
  )
      /* Creating an empty array. */
      const unsub = onSnapshot(
        /* A callback function that is called when the query is executed. */
         todoListQuery, querySnapshot => {
             var conversations = []
  
             /* Iterating over the querySnapshot and pushing the data to the todoItems array. */
             querySnapshot.forEach(doc => {
              conversations.push({
                id: doc.data().number,
                     ...doc.data(),
                 })
             })
             //setMessage(...conversations)
             /* Setting the state of todos to the todoItems array. */
             setNewRows( (prep) => { 
             return [...prep, ...conversations]
            }
              )
            }
         
  
            )
             
           /* Returning the unsubscribe function. */
            return unsub
   /* Setting the state of the message to the conversations array. */
  
  }, [])
   // condition
  
  
    const sentMessage = (e) => {
      e.preventDefault();
   
         addDoc(collection(db,'suplidores'), {
         number: number + 1,
          fullName: fullName,
          articulo: articulo,
          cantidad: cantidad,
          createdAt: serverTimestamp()
      })
      let newContent =  { id: number + 1,
        fullName: fullName,
         articulo: articulo, 
        cantidad: cantidad }
  
      setNewRows((pre) => { 
        return [...pre, newContent] 
        })
      setNumber(number + 1)
      setFullName('');
      setArticulo('');
      setCantidad('');
    };
  
    const deleteMessage = async (id)  => {
      const docRef = doc(db, 'suplidores', id)
      await deleteDoc(docRef)
    }
  
   
  
    const deleteRow = async (record) => {
      let id = record.id
  
      Modal.confirm({
        title: '¿Estas seguro de eliminar este registro?',
        okText: 'Eliminar',
        okType: 'danger',
        onOk() {
          setNewRows((pre) => {
          
            return pre.filter(item => item.id !== id)
          })
          deleteMessage(id)
        }
      })
       
  
    }
  
    const editRow = (record) => {
      setEditing(record)
      setIsEdited(true)
    }
  
   

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
          value={fullName} onChange={event => setFullName(event.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Articulo"
          defaultValue="Nombre de Articulo"
          value={articulo} onChange={event => setArticulo(event.target.value)}
        />
        <TextField
          required
          type="number"
          id="outlined-number"
          label="Cantidad"
          defaultValue="Cantidad"
          value={cantidad} onChange={event => setCantidad(event.target.value)}
        />
        <ButtonContainer>
        <Button onClick={sentMessage} variant="contained" color="primary" type="submit">Add to Database</Button>
        </ButtonContainer>
        </div>
        
        </Box>
            <div style={{ height: 400, width: '100%', background: "#fff"}}>
            <Table>
                  <tr>
                    <th>id</th>
                      <th>Full Name</th>
                      <th>Articulo</th>
                      <th>Cantidad</th>
                    </tr>
              {
                newRows.map((row, index) => {
                  return (
                    <tr key={index}>
                      <td>{row.id}</td>
                      <td>{row.fullName}</td>
                      <td>{row.articulo}</td>
                      <td>{row.cantidad}</td>
                      <td>
                        <EditOutlined onClick={() => {editRow(row)}}/>
                        <DeleteOutlined onClick={() => {deleteRow(row)}}  style={
                          { color: 'red' , marginLeft: '10px'}
                        }/>
                      </td>
                    </tr>
                  )
              }
              )}
            </Table>
      <Modal
        title="Editar Cliente"
        visible={isEdited}
        onText = "Editar"
        onCancel={
          () => {
            setIsEdited(false)
            setEditing(null)
          }
        }
        onOk={() => {
         
          setNewRows((pre) => {

            return pre.map((item) => {
              if (item.id === editing.id) {
            return editing
            } else {
              return item
            }
          })})
          setIsEdited(false)
        }}
      >

        <Input value={editing?.fullName} onChange={(e) => {
          setEditing((pre) => { return {...pre, fullName: e.target.value}})
        }} />
        <Input value={editing?.limite}  onChange={(e) => {
          setEditing((pre) =>  {return {...pre, limite: e.target.value}})
        }}  />
        <Input value={editing?.direccion}  onChange={(e) => {
          setEditing((pre) => {
            return {...pre, direccion: e.target.value}})
        }}  />
      </Modal>
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

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
  font-size: 14px;
  color: #333;
  background-color: #fff;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }

  tr {
    border-bottom: 1px solid #ddd;
    border-collapse: collapse;
    border-spacing: 0;
    border: 1px solid #ddd;
    border-radius: 5px;
    overflow: hidden;
    font-size: 14px;
    color: #333;
    background-color: #fff;
    margin-bottom: 20px;
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  th {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    border-collapse: collapse;
    border-spacing: 0;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    border-collapse: collapse;
    border-spacing: 0;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`