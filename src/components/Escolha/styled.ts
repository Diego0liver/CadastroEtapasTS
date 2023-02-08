import styled from "styled-components";


export const Conteiner = styled.div<{selet: boolean;}>`
    display: flex;
    border: 2px solid ${props=>props.selet ? '#25CD89':'#16195C'};
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 15px;
    align-items: center;
    cursor: pointer;
    &:hover{
        border: 2px solid #496459
    }
`
export const Icon = styled.div`
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #2d2692;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 25px
`

export const Titulo = styled.div`
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 7px;
    margin-left:10px
`