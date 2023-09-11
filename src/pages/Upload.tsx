import React from 'react'
import styled from 'styled-components';
import img from '../assets/pexels-photo-6153741.webp'
const Upload = () => {
  return (
    <div>
         <Container>
                 <Wrapper>
                  <ImageHolder>
                           <Image src={img} />
                  </ImageHolder>
                  </Wrapper> 
         </Container>
    </div>
  )
}

export default Upload;
const Image=styled.img`
width: 200px;
height: 200px;
object-fit: contain;
`
const ImageHolder=styled.div`
background-color: aliceblue;
width: 200px;
height: 200px;

`
const Wrapper=styled.div`
width: 50%;
/* padding: 20px 20px 2px 20px; */
`
const Container=styled.div`
height: 600px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`
