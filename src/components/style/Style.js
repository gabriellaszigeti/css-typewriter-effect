import styled from "styled-components";
import { keyframes } from "styled-components"

export const DivStyle = styled.div`
width: 100%;
height: 500px;
display: flex;
justify-content: center;
align-items: center;
`;

const typing = keyframes`
  from {
    width:0;
  }

  to {
    width:472px;
  }
`;

const blink = keyframes`
from,
to{
  border-right-color: transparent;}

  50%{border-color: purple;}
`;


export const PageStyle = styled.div`
background-color: whitesmoke;
font-size: 24px;
margin: 25px;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

export const H1Style = styled.h1`
color:blue;
overflow: hidden;
font-family: monospace;  
margin: 0 auto;
letter-spacing: 0.10em;
border-right: 0.1em solid purple;
white-space: nowrap;
animation:${typing} 4s steps(30,end) 1s 1 normal both, ${blink} 0.6s steps(29,end) infinite;
`;


