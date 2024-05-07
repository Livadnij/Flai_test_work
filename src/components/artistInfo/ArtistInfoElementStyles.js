import styled from "styled-components";


export const ArtistInfoWrapper = styled.div`
background-color: #131314;
display : flex;
justify-content: space-between;
align-items : center;
flex-direction: row;
`
export const VideoWrapper = styled.div`
background-color: #131314;
height: 240px;
display : flex;
justify-content: space-between;
align-items : center;
flex-direction: column;
`
export const VideoBox = styled.div`
padding: 20px;
padding-bottom: 25px;
width: 150px;
background-color: #212122;
height: 140px;
display : flex;
justify-content: space-between;
align-items : center;
flex-direction: column;
& p {
    font-family: Montserrat;
    font-size: 13px;
    font-weight: 600;
    line-height: 20px;
    text-align: center;
    color: #9E9FA4;
    }
& h1 {
    font-family: Montserrat;
font-size: 40px;
font-weight: 700;
line-height: 48.76px;
text-align: center;
color: #FFFFFF;
}
& button {
    display: flex
}
& button p {
    padding-left: 6px;
    font-family: Montserrat;
font-size: 12px;
font-weight: 700;
line-height: 14.63px;
text-align: center;
color: #D1FD0A;
}
`
export const ArtistInfoBox = styled.div`
width: 100%;
height: 100%;
display : flex;
justify-content: space-between;
align-items : center;
flex-direction: column;
& hr {
    width: 100%;
    border-top: 3px double #212122;
    color: #212122;
    overflow: visible;
    text-align: center;
    height: 1px;
}
`
export const KeywordsBox = styled.div`
padding-left: 40px;
padding-right: 40px;
border-top: solid #212122 1px;
padding-top: 10px;
padding-bottom: 10px;
display : flex;
justify-content: space-between;
align-items : center;
flex-direction: row;
& p {
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 600;
    line-height: 14.63px;
    text-align: left;
color:  #8E8F92   
}
& div {
    background-color: #212122;
    padding : 8px, 10px, 8px, 10px;
    border-radius : 15px;
    margin-left: 5px;
}
& div p {
    padding-left: 10px;
    padding-right: 10px;
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 600;
    line-height: 20px;
    text-align: left;
 color:     #FFFFFF;
}
`
export const OfficialArtist = styled.div`
display : flex;
align-items : center;
flex-direction: row;
& button {
    align-self : start;
}
& div {
    padding-left: 20px;
    display : flex;
    flex-direction: column;
}
& div div {
    padding-bottom: 10px;
    padding-left: 0;
    height: 133
    justify-content: space-between;
    display : flex;
    flex-direction: row;
}
& p {
    font-family: Montserrat;
font-size: 12px;
font-weight: 600;
line-height: 20px;
text-align: left;
color: #8E8F92;
}
& h1 {
    font-family: Montserrat;
font-size: 18px;
font-weight: 700;
line-height: 20px;
text-align: left;
color: #FFFFFF;
}
& h2 {
    font-family: Montserrat;
font-size: 14px;
font-weight: 600;
line-height: 20px;
text-align: left;
color : #FFFFFF;
}
`
export const Trending = styled.div`
height: 100%;
display : flex;
align-items : start;
flex-direction: column;
& div {
    padding-bottom: 15px;
    display: flex;
}
& span {
    font-family: Montserrat;
font-size: 12px;
font-weight: 600;
line-height: 14.63px;
text-align: left;
color: #FFFFFF;
}
& p {
    font-family: Montserrat;
font-size: 12px;
font-weight: 600;
line-height: 14.63px;
text-align: left;
color: #8E8F92;
padding-right: 4px;
}
`
export const Country = styled.div`
height: 100%;
display : flex;
align-items : start;
flex-direction: column;
& div {
    padding-bottom: 15px;
    display: flex;
}
& span {
    font-family: Montserrat;
font-size: 12px;
font-weight: 600;
line-height: 14.63px;
text-align: left;
color: #FFFFFF;
}
& p {
    font-family: Montserrat;
font-size: 12px;
font-weight: 600;
line-height: 14.63px;
text-align: left;
color: #8E8F92;
padding-right: 4px;
}
`

export const DailyCount = styled(VideoBox)`
height: 100px;
background-color: #00BE6E;
& h2 {
  font-family: Montserrat;
font-size: 13px;
font-weight: 600;
line-height: 20px;
text-align: center;
color: #AAFFDB;
}
& h1 {
  font-family: Montserrat;
font-size: 32px;
font-weight: 700;
line-height: 39.01px;
text-align: center;
color: #FFFFFF;
}
`
export const ArtistContainer = styled.div`
align-items: start;
height: 100%;
padding-bottom: 30px;
padding-left: 40px;
padding-top: 30px;
padding-right: 40px;
width: 100%;
display : flex;
justify-content: space-between;
flex-direction: row;
`

export const BlueButton = styled.button `
margin-left: 5px;
border-radius: 15px;
background-color: #27459140;
padding: 2px 10px 2px 10px;
& span {
    font-family: Montserrat;
font-size: 10px;
font-weight: 700;
line-height: 18px;
letter-spacing: 0.04em;
text-align: left;
color: #6993FF;
}
`

export const GreyButton = styled(BlueButton)`
display: flex;
height: 30px;
background-color: #3F3F41;
align-items: center;
& span {
    padding-left: 5px;
font-size: 12px;
line-height: 20px;
text-align: center;
color: #FFFFFF;
}
`