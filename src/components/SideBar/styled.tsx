import styled from "styled-components";


export const Conteiner = styled.div`
      margin: 30px;
      cursor: pointer;
      a{
        display: flex;
        align-items: center;
        text-decoration: none;
      }
`
export const Info = styled.div`
    flex: 1;
    margin-right: 20px
`
export const Titulo = styled.div`
text-align: right;
font-weight: bold;
margin-bottom: 5px;
font-size: 15px;
color: #FFF;
margin-right: 10px

`
export const Icons = styled.div<{act: boolean}>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${props=>props.act ? '#25CD89' : '#02044A'};
    display: flex;
    justify-content: center;
    align-items: center 
`

export const Point = styled.div<{act: boolean}>`
    width: 6px;
    height: 6px;
    border: 3px solid #494A7C;
    border-radius: 50%;
    margin-left: 50px;
    margin-right: -36px;
    background-color: ${props=>props.act ? '#25CD89' : '#494A7C'};
`