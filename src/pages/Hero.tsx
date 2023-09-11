import React from 'react'
import styled from 'styled-components';
import videos from '../assets/herovid.mp4'
import GlobalButton from './GlobalButton';
import {ImSearch} from 'react-icons/im'
const Hero = () => {
  return (
    <div>
      <Container >
        <Wrapper  src={videos} autoPlay loop muted playsInline />
        <Cover>
        <Head>
        <GlobalButton pos=''   pad={"12px 20px 12px 20px"} text={"Reading"}  br={"25px"}/>
        <GlobalButton pos='' pad={"12px 20px 12px 20px"} text={"Architecture"}  br={"25px"}/>
        <GlobalButton pos=''  pad={"12px 20px 12px 20px"} text={"Stories"}  br={"25px"}/>
        <GlobalButton pos='' pad={"12px 20px 12px 20px"} text={"Writing"}  br={"25px"}/>
        <GlobalButton pos='' pad={"12px 20px 12px 20px"} text={"Nature"}  br={"25px"}/>
        <GlobalButton  pos='' pad={"12px 20px 12px 20px"} text={"Tech"}  br={"25px"}/>
        <GlobalButton pos='' pad={"12px 20px 12px 20px"} text={"History"}  br={"25px"}/>
        <GlobalButton pos='' pad={"12px 20px 12px 20px"} text={"Discoveries"}  br={"25px"}/>
        <GlobalButton pos='' pad={"12px 20px 12px 20px"} text={"Dialogue"}  br={"25px"} />
      
          </Head>

          <TextBox>
        <h2>Explore the world’s leading Books
and Autors</h2>
        <h4>Millions of designers and agencies around the world showcase their portfolio work on Dribbble - the home to the world’s best design and creative professionals</h4>
        <InputHolder>
            <Icon/>
            <input type="search" placeholder='Search By Author Name...' />
          </InputHolder>
          </TextBox>

        </Cover>

      </Container>
      
    </div>
  )
}

export default Hero;
const Icon=styled(ImSearch)`
font-size: 17px;
color: #787575;
`
const InputHolder=styled.div`
height: 40px;
width: 330px;
background-color: white;
border-radius: 5px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 5px 15px;
input{
  width:90% ;
  height: 50px;
  border: none;
}
`


const TextBox =styled.div`
height: 70%;
width: 100% ;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
/* background-color: aqua; */
color: white;
h2{
  width: 40%;
  text-align: center;
}
h4{
  width: 60%;
  text-align: center;
}
`;
const Head =styled.div`
height: 50px;
width: 95%;
margin: 4%;
display: flex;
justify-content: space-between;
align-items: center;
/* background-color: #eb4306; */
`;
const Cover= styled.div`
width: 100%;
height: 550px;
/* display: flex;
align-items: center;
justify-content: center; */
background-color: rgba(0, 0, 0, 0.6);
position: absolute;
top: 70px;
`

const Wrapper= styled.video`
width: 100%;
height: 550px;
display: flex;
align-items: center;
justify-content: center;
object-fit: cover;
position:relative;
`

const Container = styled.div`
width: 100%;
height: 700px;

/* display: flex;
align-items: center;
justify-content: center; */
/* background-color: aquamarine; */
`