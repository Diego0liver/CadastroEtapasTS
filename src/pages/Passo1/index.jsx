import * as C from './styled'
import Theme from '../../components/Theme'


export const Passo1=()=>{
    return(
        <Theme>
        <C.Conteiner>
           <p>Passo 1/3</p>
           <h1>Queremos te conhecer melhor</h1>
           <p>Preencha o seu nome abaixo</p><hr />
           <label>Seu nome</label>
           <input type='text' autoFocus ></input>

           <button >Proximo</button>
        </C.Conteiner>
        </Theme>
    )
}