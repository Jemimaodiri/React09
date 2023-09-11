import React, { useState } from 'react'
import styled from 'styled-components';
import {AiOutlineEye} from 'react-icons/ai'



interface iCard{
         bgc:string
         letter:string
         name:string;
         rate:string
         Img:string
         text:string
         quote:string
}


const Cards:React.FC<iCard>= ({bgc, letter, name, rate, Img, text,quote}):any => {
const [show, SetShow]=useState<boolean>(false);
const Display=():any=>{
         SetShow(!show)
      
}
  return (
    <div>
         <Container>
                 <Image src={Img}>
                 </Image>
                 {/* <Covering>
                 <div>{quote}</div>
                 </Covering> */}
                 <Button >
                 {text}
                 </Button>
              <UnderTexts>
                  <Ist>
                  <Circle bgc={bgc}>
                  {letter}
                  </Circle>
                  {name}
                  </Ist>
                  <Sec>
                  <Icon />
                  {rate}
                  </Sec>
   </UnderTexts>   
          {/* <PartTwo>

          </PartTwo> */}
         </Container>
    </div>
  )
}

export default Cards;
const Sec=styled.div`
height: 40px;
width: 130px;
display: flex;
justify-content: center;
align-items: center;
/* background-color: #fff; */
`
const Ist=styled.div`
height: 40px;
width: 145px;
display: flex;
justify-content: space-between;
align-items: center;
/* background-color: #fff; */
`

const Icon=styled(AiOutlineEye)`

`;
const Circle=styled.div<{bgc:string}>`
height: 40px;
width:40px ;
border-radius: 50%;
background-color:${({bgc})=>bgc} ;
display: flex;
align-items: center;
justify-content: center;
position: relative;
top: 200;
`;

const UnderTexts=styled.div`
height: 180px;
width: 260px;
display: flex;
justify-content: space-between;
align-items: center;
/* background-color: #0ae1c4; */
font-size: 17px;
`;

// const Covering=styled.div` 
// position: absolute;
// top: 824px;
// left: 97x;
// height:67px ;
// width: 320px;
// display: flex;
// align-items:flex-end;

// `
const Image=styled.img`
height: 170px;
width: 250px;
border: 1px solid black;
;
`


const Button=styled.div`
    color: white;
  font-size: 18px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  opacity: calc(0.9);
  position: absolute;
  border-radius: 19px;
left: 30px;
/* right: 9px; */
/* top:5px; */
bottom: 190px;

`
const Container=styled.div`
height: 225px;
width:280px ;
/* background-color: blueviolet; */
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-left: 10px;
position: relative;
padding: 10px;
`;
