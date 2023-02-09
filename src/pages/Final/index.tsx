import { useNavigate } from 'react-router-dom'
import * as C from './styled'
import Theme from '../../components/Theme'
import {useForms} from '../../context/Context'


export const Final=()=>{
    const {state} = useForms()
    const history = useNavigate()

const ok=()=>{
    history('/')
    window.location.reload();
}

    return(
        <Theme>
        <C.Conteiner>
           <h1>Tudo certo {state.nome}</h1>
           <h2>Entraremos em contato por <br />
           {state.fone} ou {state.email}</h2>
           <button onClick={ok}>Ok</button>
        </C.Conteiner>
        </Theme>
    )
}