import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const Header = ({sideBarToogle,setSideBarToogle}) => {
    return (
        <Wrapper>
            <HeaderItem onClick={() => setSideBarToogle(!sideBarToogle)}>
                <i className='fas fa-bars'/>
            </HeaderItem>
            <HeaderItem>
               <div className='movil'>
                <Link style={{textDecoration:"none", color:'#fff'}} to="/dashboard"><i className='fas fa-border-all'/>
             <span>Dashboard</span> 
             </Link>  
             </div>
            </HeaderItem>
            <Placeholder />
            <HeaderItem>
                 <Link to="/"> <Profile>
                    <img src='https://avatars.githubusercontent.com/u/73570283?v=4' alt='user'/> 
                </Profile>
                </Link>
            </HeaderItem>
        </Wrapper>
    )
}

export default Header



const Wrapper = styled.div`
 display: flex;
 height: 70px;
 align-items: center;
 background-color: #20212d;
 padding: 0 20px;
 -webkit-box-shadow: 0px 4px 15px 0px #121212;
 box-shadow: 0px 4px 15px 0px #121212;
 position: sticky;
 top: 0;
`

const HeaderItem = styled.div`
 color: #eee;
 padding: 10px 16px;
 border-radius: 4px;
 .movil{
        @media (max-width: 768px) { 
       
       display: none;
   }
    }


 span{
     margin-left: 10px;
     font-weight: 500;

   
 }
 
 &:hover {
     background-color: #18181f;
     transition: 0.3s;
     cursor: pointer;
 }

  

`

const Placeholder = styled.div`
 flex: 1;
 
`
const Profile = styled.div`
 display: flex;
 align-items: center;
 img{
      height: 40px;
      border-radius: 50%
    }
    @media (max-width: 768px) { 
       
       align-items: flex-end;
   }
`
