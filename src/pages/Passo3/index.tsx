import {ChangeEvent, useEffect } from 'react'
import * as C from './styled'
import Theme from '../../components/Theme'
import {useForms, FormAction} from '../../context/Context'
import { useNavigate } from 'react-router-dom'


export const Passo3=()=>{
    const hisoty = useNavigate()
    const {state, dispatch} = useForms()

    useEffect(()=>{
        if(state.nome === ''){
            hisoty('/passo2')
        }else{
        dispatch({
            type: FormAction.setEtapa,
            payload: 3
        })}
    },[])

    const proximo=()=>{
        if(state.email !== '' && state.fone !== ''){
      console.log(state)
      hisoty('/final')}else{
        alert('Preencha todos os campos')
      }
    }
    const emailChange=(e: ChangeEvent<HTMLInputElement>)=>{
        dispatch({
            type: FormAction.setEmail,
            payload: e.target.value
        });
    }

    const telChange=(e: ChangeEvent<HTMLInputElement>)=>{
        dispatch({
            type: FormAction.setFone,
            payload: e.target.value
        });
    }
    const voltar=()=>{
        hisoty('/passo2')
        
    }


    return(
        <Theme>
        <C.Conteiner>
           <p>Passo <>{state.etapa}</>/3</p>
           <h1>{state.nome} informe o seus contatos</h1>
           <p>Em 24Hrs entraremos em contato para mais detalhes</p><hr />
           <label>Seu Email:</label>
           <input type='email'
           onChange={emailChange}
            ></input>

           <label>Seu Telefone: *com ddd</label>
           <input type='tel'
           onChange={telChange}
            ></input>
           
           <button onClick={voltar} >Voltar</button>
           <button onClick={proximo} >Enviar</button>
        </C.Conteiner>
        </Theme>
    )
}