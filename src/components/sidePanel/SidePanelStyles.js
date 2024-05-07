import styled from "styled-components";
import ProfilePic from './Ellipse 1.png'

export const SidePanelBox = styled.div`
height: 100vh;
min-width: 90px;
background: #0D0D0E;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
background-image: linear-gradient(
    to bottom,
    #0D0D0E,
    #0D0D0E,
    #0D0D0E,
    #0D0D0E,
    #1e2c2e,
    #2e2c41,
    #0D0D0E
  )
`;

export const MenuElement = styled.button`
    position: sticky;
    width: 50px;
    height: 50px;
    margin-top: 20px;
    left: 20px;
    gap: 0px;
    opacity: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #212122;
    border-radius: 25px;
  `

export const IconButton = styled.button`
`
export const MenuBlock = styled.div`
justify-content: space-between;
height: 150px;
margin-bottom: 20px;
display: flex;
flex-direction: column;
align-items: center;
`
export const ProfileButton = styled.button`
    background: #B190B6;
    width: 50px;
    height: 50px;
    border-radius: 25px;
background-image: url(${ProfilePic});
`