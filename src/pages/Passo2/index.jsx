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
        dispatch({
            type: FormAction.setEtapa,
            payload: 2
        })
    },[])

    const proximo=()=>{
      if(state.nome !== '')
        {hisoty('/passo3')}
        else{
            alert('Preencha o campo')
        }
    }
    const setLevel =(nivel)=>{
        dispatch({
            type: FormAction.setLevel,
            payload: nivel
        })
    }

    return(
        <Theme>
        <C.Conteiner>
           <p>Passo {state.etapa}/3 </p>
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
           
           <button onClick={proximo} >Proximo</button>
        </C.Conteiner>
        </Theme>
    )
}