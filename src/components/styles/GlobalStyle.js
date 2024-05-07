import styled, { createGlobalStyle } from 'styled-components'
import reset from './reset.css'

export const GlobalStyle = createGlobalStyle`
@import url(${reset}); 
`;

export const Wrapper = styled.div`
  margin: 0;
  background-color: #0D0D0E;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const BodyElement = styled.div`
margin: 0;
width: 100%;
background-color: #0D0D0E;
min-height: 100vh;
display: flex;
flex-direction: column;
`;