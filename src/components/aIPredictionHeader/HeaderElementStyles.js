import styled from "styled-components";


export const HeaderWrapper = styled.div`
padding-left : 50px;
padding-right : 50px;
height : 60px;
display : flex;
justify-content: space-between;
align-items : center;
flex-direction: row;
& h1 {
    color: #404044;
    font-family: Montserrat;
font-size: 14px;
font-weight: 700;
line-height: 20px;
text-align: left;
}
`
export const HeaderGroup = styled.div`
width: 400px;
align-items : center;
display : flex;
flex-direction: row;
justify-content: space-between;
`
export const HeaderDates = styled.div`
display : flex;
flex-direction: column;
& p {
    color: #37373A;
    font-family: Montserrat;
font-size: 10px;
font-weight: 600;
line-height: 20px;
text-align: right;

}
`
export const HeaderButton = styled.button`
display : flex;
& p {
    padding-left: 10px;
    color: #37373A;
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 600;
    line-height: 20px;
    text-align: left;
    
}
& img {
    width: 20px;
    height: 20px;
}
`