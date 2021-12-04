import styled from "styled-components";
import { keyframes} from "styled-components"

export const DivStyle  = styled.div`
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
    width:100%;
  }
`;

const blink = keyframes`
  from,
  to {
    border-color: transparent;
  }
  50%{
      border-color:purple;
  }
`;


export const PageStyle  = styled.div`
background-color: whitesmoke;
font-family: arial;
font-size: 24px;
margin: 25px;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

export const H1Style  = styled.h1`
color:blue;
overflow: hidden;
margin: 0 auto;
letter-spacing: 0.10em;
border-right: 0.20 em solid purple;
white-space: nowrap;
animation:${typing} 4.0s steps(100,end), ${blink} 0.5s step-end infinite;
`;


