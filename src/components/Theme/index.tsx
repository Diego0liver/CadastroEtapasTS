
import * as C from './styled'
import Header from '../Header'
import { SideBar } from '../SideBar' 
import { useForms } from '../../context/Context'


type Props={
  children: any
}

const Theme = ({children}: Props) => {
  const {state} = useForms()
  return (
    <C.Conteiner>
        <C.Area>
            <Header />
            <C.Steps>
             <C.Sidebar>
              <SideBar
              titulo='Nome'
              icon='pro'
              path='/'
              act={state.etapa === 1}
              />

            <SideBar
              titulo='Curso'
              icon='book'
              path='/passo2'
              act={state.etapa === 2}
              />

            <SideBar
              titulo='Contato'
              icon='email'
              path='/passo3'
              act={state.etapa === 3}
              />


             </C.Sidebar>
            
            <C.Page>
                {children}
            </C.Page>
            </C.Steps>
        </C.Area>
    </C.Conteiner>
  )
}

export default Theme