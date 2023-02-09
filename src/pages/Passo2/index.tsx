import { useEffect } from 'react'
import * as C from './styled'
import Theme from '../../components/Theme'
import {useForms, FormAction} from '../../context/Context'
import { useNavigate } from 'react-router-dom'
import {Escolha} from '../../components/Escolha'


export const Passo2=()=>{
    const hisoty = useNavigate()
    const {state, dispatch} = useForms()

    useEffect(()=>{
        if(state.nome === ''){
            hisoty('/')
        }else{
        dispatch({
            type: FormAction.setEtapa,
            payload: 2
        })}
    },[])

    const proximo=()=>{
        hisoty('/passo3')
    }
    const setLevel =(nivel: boolean)=>{
        dispatch({
            type: FormAction.setLevel,
            payload: nivel
        })
    }

    const voltar=()=>{
        hisoty('/')
    }

    return(
        <Theme>
        <C.Conteiner>
           <p>Passo <>{state.etapa}</>/3 </p>
           <h1>{state.nome} oque podemos ajudar?</h1>
           <p>Escolha oque voce esta procurando</p><hr />
           <Escolha
              titulo='Curso de Graducao'
              icon='👨‍🎓'
              selet={state.nivel === true}
              onClick={()=>setLevel(true)}
            />
            <Escolha
              titulo='Curso de Pos-graducao'
              icon='📚'
              selet={state.nivel === false}
              onClick={()=>setLevel(false)}
            />
           <button onClick={voltar} >Voltar</button>
           <button onClick={proximo} >Proximo</button>
           
        </C.Conteiner>
        </Theme>
    )
}