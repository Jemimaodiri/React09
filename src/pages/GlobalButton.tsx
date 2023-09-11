import React from "react";
import styled from "styled-components";
interface iButton {
  text: string;
  pad: string;
  br: string;
  pos:string
}
const GlobalButton: React.FC<iButton> = ({ text, pad,br,pos}) => {
  return (
    <div>
      <Button pad={pad} br={br} pos={pos}>
         {text}
      </Button>
    </div>
  );
};

export default GlobalButton;
const Button = styled.div<{ pad: string,br:string ,pos:string}>`
/* height:50px;
width:50px; */
  padding: ${({ pad }) => pad};
border-radius: ${({br})=>br};
  color: white;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  opacity: calc(0.7);
`;
