import styled from 'styled-components';

export const Hder = styled.div `
    display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
  `

export const HderH1 = styled.h1 `
    font-size: 60px;
    font-family: Didot, serif;
    font-weight: bold;
    flex: 8;
    text-align: center;
    color: #000;
    `


export const HderSpan = styled.span `
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
    

  ${props => (props.type === 'date' ?
    `
    margin-left: 25px;
      flex: 1;

    ` : null)}

    ${props => (props.type === 'temp' ?
    `
    text-align: right;
    margin-right: 25px;
    flex: 1;

    ` : null)}

    `



///////////////////////////////////////////////////
//////////////////////////////////////////////////
/////                                      ///////
/////           TOP Bar                    ///////
//////////////////////////////////////////////////

export const TBar = styled.div `
width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`

export const TopBarContainer = styled.div `
width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`

export const TopBarContainerLeft = styled.div `
display: flex;
justify-content: none;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;
`

export const TopBarContainerLeftSpan = styled.span `
cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`

export const TopBarContainerCenter = styled.div `
display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;

  &:last-child{
    margin-right: 0;
  }
`

export const TopBarContainerCenterSpan = styled.span `
cursor: pointer;
margin-right: 5%;

&:hover{
  text-decoration: underline;
}
`


export const TopBarContainerRight = styled.div `
display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`

export const TopBarContainerRightSpan = styled.span `
cursor: pointer;
`



// @media (min-width: 1280px) {
//   .top-bar .container {
//     width: 1280px;
//   }
// }

