import React from 'react'
import Cards from './Cards';
import img1 from '../assets/one.png'
import img2 from '../assets/two.png'
import img3 from '../assets/three.png'
import img4 from '../assets/four.png'
import img5 from '../assets/five.jpg'
import img6 from '../assets/six.jpg'
import img7 from '../assets/seven.jpg'
import img8 from '../assets/eight.png'
import img9 from '../assets/nine.png'
import img10 from '../assets/ten.png'
import img11 from '../assets/11.png'
import img12 from '../assets/12.png'
import { styled } from 'styled-components';


const Body = () => {
  return (
    <div>
        <Container>
        {/* <h1>Our specials</h1> */}
          <Wrapper>
         
          <Cards bgc={"purple"} letter={'J'}  name={"Jemix Odiri"} rate={'129k'}   Img={img1} text='Experience' quote='Pride comes before a fall'/>
          <Cards bgc={"green"} letter={'L'}  name={"Linda Josh"} rate={'89k'}   Img={img2} text='Architect' quote='Pride comes before a fall'/>
          <Cards bgc={"pink"} letter={'K'}  name={"Kelvin Man"} rate={'18k'}   Img={img3} text='Resilient' quote='Pride comes before a fall'/>
          <Cards bgc={"blue"} letter={'T'}  name={"lormm wenn"} rate={'128k'}   Img={img4} text='Devices' quote='Pride comes before a fall'/>
          <Cards bgc={"purple"} letter={'M'}  name={"Martin Vigor"} rate={'128k'}   Img={img5} text='Discover' quote='Pride comes before a fall'/>
          <Cards bgc={"blue"} letter={'L'}  name={"Jemix Odiri"} rate={'128k'}   Img={img6} text='Comedy' quote='Pride comes before a fall'/>
          <Cards bgc={"purple"} letter={'L'}  name={"Jemix Odiri"} rate={'128k'}   Img={img7} text='Comedy' quote='Pride comes before a fall'/>
          <Cards bgc={"grey"} letter={'L'}  name={"Jemix Odiri"} rate={'128k'}   Img={img8} text='Comedy' quote='Pride comes before a fall'/>
          <Cards bgc={"lemongreen"} letter={'L'}  name={"Jemix Odiri"} rate={'128k'}   Img={img9} text='Comedy' quote='Pride comes before a fall'/>
          <Cards bgc={"brown"} letter={'L'}  name={"Jemix Odiri"} rate={'128k'}   Img={img10} text='Comedy' quote='Pride comes before a fall'/>
          <Cards bgc={"purple"} letter={'L'}  name={"Jemix Odiri"} rate={'128k'}   Img={img5} text='Comedy' quote='Pride comes before a fall'/>
          <Cards bgc={"grey"} letter={'L'}  name={"Jemix Odiri"} rate={'128k'}   Img={img1} text='Comedy' quote='Pride comes before a fall'/>
          <Cards bgc={"gold"} letter={'L'}  name={"Jemix Odiri"} rate={'128k'}   Img={img11} text='Comedy' quote='Pride comes before a fall'/>
          <Cards bgc={"brown"} letter={'L'}  name={"Jemix Odiri"} rate={'128k'}   Img={img6} text='Comedy' quote='Pride comes before a fall'/>
          <Cards bgc={"yellow"} letter={'L'}  name={"Jemix Odiri"} rate={'128k'}   Img={img4} text='Comedy' quote='Pride comes before a fall'/>
          <Cards bgc={"red"} letter={'L'}  name={"Jemix Odiri"} rate={'128k'}   Img={img3} text='Comedy' quote='Pride comes before a fall'/>
          <Cards bgc={"orange"} letter={'L'}  name={"Jemix Odiri"} rate={'128k'}   Img={img1} text='Comedy' quote='Pride comes before a fall'/>
          <Cards bgc={"skyblue"} letter={'L'}  name={"Jemix Odiri"} rate={'128k'}   Img={img5} text='Comedy' quote='Pride comes before a fall'/>
          <Cards bgc={"violet"} letter={'L'}  name={"Jemix Odiri"} rate={'128k'}   Img={img3} text='Comedy' quote='Pride comes before a fall'/>
          <Cards bgc={"indigo"} letter={'L'}  name={"Jemix Odiri"} rate={'128k'}   Img={img12} text='Comedy' quote='Pride comes before a fall'/>
          </Wrapper>
        </Container>
        
    
    </div>
  )
}

export default Body;
const Wrapper=styled.div`
height: 100%;
width: 100%;
display: flex;
flex-wrap: wrap;
/* background-color: #13a7dd; */
`;
const Container=styled.div`
height: 100%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
/* background-color: aquamarine; */
/* flex-direction: column; */
`;


