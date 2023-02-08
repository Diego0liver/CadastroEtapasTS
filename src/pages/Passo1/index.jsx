import React, { ChangeEvent, useEffect } from 'react'
import * as C from './styled'
import Theme from '../../components/Theme'
import {useForms, FormAction} from '../../context/Context'
import { useNavigate } from 'react-router-dom'


export const Passo1=()=>{
    const hisoty = useNavigate()
    const {state, dispatch} = useForms()

    useEffect(()=>{
        dispatch({
            type: FormAction.setEtapa,
            payload: 1
        })
    },[])

    const proximo=()=>{
      if(state.nome !== '')
        {hisoty('/passo2')}
        else{
            alert('Preencha o campo')
        }
    }
    const nameChange=(e)=>{
        dispatch({
            type: FormAction.setNome,
            payload: e.target.value
        });
    }

    return(
        <Theme>
        <C.Conteiner>
           <p>Passo {state.etapa}/3</p>
           <h1>Queremos te conhecer melhor</h1>
           <p>Preencha o seu nome abaixo</p><hr />
           <label>Seu nome: {state.nome}</label>
           <input type='text' autoFocus
           onChange={nameChange}
            ></input>

           <button onClick={proximo} >Proximo</button>
        </C.Conteiner>
        </Theme>
    )
}