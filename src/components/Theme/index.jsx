
import * as C from './styled'
import Header from '../Header'



const Theme = ({children}) => {
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