
import * as C from './styled'
import Header from '../Header'
import { ReactNode } from 'react'


type Props={
  children: ReactNode
}

const Theme = ({children}: Props) => {
  return (
    <C.Conteiner>
        <C.Area>
            <Header />
            <C.Steps>
             <C.Sidebar>
              ...
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