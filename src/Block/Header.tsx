import React from 'react'
import styled from 'styled-components';
import img from '../assets/book.png'
import {BsSearch} from 'react-icons/bs'
import { NavLink } from 'react-router-dom';
import GlobalButton from '../pages/GlobalButton';
const Header = () => {
  return (
    <div>
      <Container>
        <Image>
          <Logo src={img}/>
        <Text>BookStore</Text>
        </Image>

        <End>
          <Search>
            <BsSearch/>
          </Search>
          <NavLink to='/upload-book' style={{textDecoration:'none'}}>
          <Button> Upload Books</Button>

          </NavLink>
        

        </End>
      </Container>
    </div>
  )
}

export default Header;
const Button=styled.button`
width: 150px;
height: 40px;
display: flex;
justify-content: center;
color: white;
align-items: center;
background-color: #E73B7D;
margin: 10px;
cursor: pointer;
border: none;
border-radius: 5px ;
`
const End=styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const Search=styled.div`
font-size: 20px;
margin: 10px;
color: grey;
`

const Text=styled.div`
font-size: 18px;
font-weight: bolder;
`
const Logo=styled.img`
width: 100%;
height: 100%;
object-fit: contain;
cursor: pointer;
`

const Image=styled.div`
height: 55px;
width: 200px;
/* background-color: purple; */
display: flex;
align-items: center;
justify-content: center;
`
const Container=styled.div`
/* background-color: crimson; */
height: 71px;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
/* position:fixed; */
/* padding: 20px 2px ;
overflow: hidden; */

`