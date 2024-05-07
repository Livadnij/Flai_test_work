import styled from "styled-components";

export const ChatWrapper = styled.div `
height: 100vh;
min-width: 360px;
display:flex;
flex-direction: column;
justify-content: space-between;
`

export const FreePlanBox = styled.div `
display:flex;
flex-direction: column;
justify-content: space-between;
padding: 15px 0 15px 20px;
 width: 100%;
 height: 110px;
 background-color: #D1FD0A;
 & h3 {
    font-family: Montserrat;
font-size: 12px;
font-weight: 600;
line-height: 13.2px;
text-align: left;
color: #6F8800;
 }
 & h1 {
    font-family: Montserrat;
font-size: 16px;
font-weight: 700;
line-height: 17.6px;
text-align: left;
color: #000000;
 }
 & button {
    background-color: #000000;
    justify-content: center;
    border-radius: 5px;
    width: 131px;
    height: 30px;
    display: flex;
    align-items: center;
 }
 & button span {
    font-family: Montserrat;
font-size: 14px;
font-weight: 700;
line-height: 15.4px;
text-align: left;
color: #FFFFFF;
 }
 `

 export const ChatBox = styled.div `
 width: 100%;
 height: 100%;
 background-image: url('./Rectangle4.png');
 `

 export const TextAreaBox = styled.div `
 height: 60px;
 width: 100%;
 background-color: #212122;
 display: flex;
 justify-content: space-between;
 padding-left: 20px;
 padding-right: 20px;
 align-items: center;
 & span {
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
color:     #8C8E92;
 }
 & button {

 }
 `